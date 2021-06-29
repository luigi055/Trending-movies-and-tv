import {
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AUTH_REFRESH_SESSION,
	loginFailed,
	loginSuccess,
	logoutFailed,
	logoutSuccess,
} from "./actions";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getCookie, setCookie } from "services/cookies";
import { loginWithGithub, logout } from "services/firebase/authentication";
import { startLoading, stopLoading } from "../loading";
import { getUserByGithubToken } from "models/get-user-by-github-token";

export function* LoginSaga(): SagaIterator {
	try {
		yield put(startLoading());

		const sessionToken = yield call(loginWithGithub);
		const user = getUserByGithubToken(sessionToken);

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
	const user = getUserByGithubToken(sessionToken);

	yield put(loginSuccess({ user, session_token: sessionToken }));
}

export function* logoutSession(): SagaIterator {
	try {
		yield call(logout);
		setCookie("access_token", "", 0);

		yield put(logoutSuccess());
	} catch (error) {
		yield put(logoutFailed());
	}
}

function* loginSaga() {
	yield takeLatest(AUTH_LOGIN, LoginSaga);
	yield takeLatest(AUTH_LOGOUT, logoutSession);
	yield takeLatest(AUTH_REFRESH_SESSION, refreshSession);
}

export const authenticationSagas = [fork(loginSaga)];
