export const selectAuthentication = (state: State) => state.authentication;
export const selectSessionToken = (state: State) =>
	selectAuthentication(state).session_token;
export const selectUser = (state: State) => selectAuthentication(state).user;
