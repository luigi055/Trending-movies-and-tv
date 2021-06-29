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
import { getUserByGithubToken } from "models/user";

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
	if (sessionToken) {
		yield put(loginSuccess({ user, session_token: sessionToken }));
	} else {
		/**
		 * session_token to null because has been verified that's
		 * there is no session
		 */
		yield put(loginSuccess({ user: null, session_token: null }));
	}
}

export function* logoutSession(): SagaIterator {
	try {
		yield call(logout);
		/**
		 * session_token to undefined because it doesn't exist anymore
		 * this flow makes the route services easier to manage private routes
		 */
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
