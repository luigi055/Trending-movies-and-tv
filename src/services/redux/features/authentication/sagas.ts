import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_REFRESH_SESSION,
	loginFailed,
	loginSuccess,
} from "./actions";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import jwt from "jsonwebtoken";
import { getCookie, setCookie } from "services/cookies";
import { loginWithGithub, logout } from "services/firebase/authentication";
import { startLoading, stopLoading } from "../loading";
import User from "models/user";

const getDomainUserByToken = (token: string): IUser | null => {
	const rawUser = jwt.decode(token) as GitHubRawUser;
	if (!rawUser) return null;

	const user = new User({
		id: rawUser?.user_id,
		name: rawUser?.name,
		email: rawUser?.email,
		avatar: rawUser?.picture,
	});

	return user;
};

export function* LoginSaga(): SagaIterator {
	try {
		yield put(startLoading());

		const sessionToken = yield call(loginWithGithub);
		const user = getDomainUserByToken(sessionToken);

		setCookie("access_token", sessionToken, 1);

		yield put(loginSuccess({ user, session_token: sessionToken }));
	} catch (error) {
		yield put(loginFailed());
	} finally {
		yield put(stopLoading());
	}
}

export function* refreshSession(): SagaIterator {
	const sessionToken = getCookie("access_token");
	const user = getDomainUserByToken(sessionToken);

	yield put(loginSuccess({ user, session_token: sessionToken }));
}

export function* logoutSession(): SagaIterator {
	yield call(logout);
	setCookie("access_token", "", 0);
}

function* loginSaga() {
	yield takeLatest(AUTH_LOGIN, LoginSaga);
	yield takeLatest(AUTH_LOGOUT, logoutSession);
	yield takeLatest(AUTH_REFRESH_SESSION, refreshSession);
}

export const authenticationSagas = [fork(loginSaga)];
