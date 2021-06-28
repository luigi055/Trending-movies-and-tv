const context = "auth";

export const AUTH_LOGIN = `${context}/LOGIN`;
export const AUTH_REFRESH_SESSION = `${context}/REFRESH_SESSION`;
export const AUTH_LOGIN_SUCCESS = `${context}/LOGIN_SUCCESS`;
export const AUTH_LOGIN_FAILED = `${context}/LOGIN_FAILED`;
export const AUTH_LOGOUT = `${context}/LOGOUT`;
export const AUTH_LOGOUT_SUCCESS = `${context}/LOGOUT_SUCCESS`;
export const AUTH_LOGOUT_FAILED = `${context}/LOGOUT_FAILED`;

export const login = (): ActionStandardBase => ({
	type: AUTH_LOGIN,
});

export const refreshSession = (): ActionStandardBase => ({
	type: AUTH_REFRESH_SESSION,
});

export const loginSuccess = (
	payload: State["authentication"]
): ActionPayloadRequired<State["authentication"]> => ({
	type: AUTH_LOGIN_SUCCESS,
	payload,
});

export const loginFailed = (): ActionStandardBase => ({
	type: AUTH_LOGIN_FAILED,
});

export const logout = (): ActionStandardBase => ({
	type: AUTH_LOGOUT,
});

export const logoutFailed = (): ActionStandardBase => ({
	type: AUTH_LOGOUT_FAILED,
});

export const logoutSuccess = (): ActionStandardBase => ({
	type: AUTH_LOGOUT_SUCCESS,
});
