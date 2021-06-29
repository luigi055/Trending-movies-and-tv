import { all } from "redux-saga/effects";
import SagaTester from "redux-saga-tester";
import initialState from "./initial-state";
import { reduceAuthentication } from "./reducer";
import { authenticationSagas } from "./sagas";
import {
	login,
	logout,
	logoutSuccess,
	loginSuccess,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	refreshSession,
} from "./actions";
import { selectSessionToken, selectUser } from "./selectors";
import { getDomainUserByToken } from "utilities/get-domain-user-by-token";

const tokenStub =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";
const userStub = getDomainUserByToken(tokenStub);

jest.mock("services/firebase/authentication", () => ({
	async loginWithGithub() {
		return await new Promise((resolve) => resolve(tokenStub));
	},
	async logout() {
		return await new Promise((resolve) => resolve("hello"));
	},
}));

function* sagas() {
	yield all([...authenticationSagas]);
}

describe("Testing the authentication feature", () => {
	let store: SagaTester<State["authentication"]> = new SagaTester({});

	beforeEach(() => {
		store = new SagaTester({
			initialState,
			reducers: reduceAuthentication as any,
		});
		store.start(sagas);
	});

	it("should call loginSuccess correctly when user login and the provider fetch correct information", async () => {
		store.dispatch(login());
		const calledLoginSuccess = await store.waitFor(AUTH_LOGIN_SUCCESS);

		const state = {
			authentication: store.getState(),
		} as State;

		expect(calledLoginSuccess).toEqual(
			loginSuccess({ user: userStub, session_token: tokenStub })
		);
		expect(selectUser(state)).toEqual(userStub);
		expect(selectSessionToken(state)).toEqual(tokenStub);
	});

	it("should refresh the session token if there is one saved in cookies", async () => {
		store.dispatch(refreshSession());
		const calledLoginSuccess = await store.waitFor(AUTH_LOGIN_SUCCESS);

		expect(calledLoginSuccess).toEqual(
			loginSuccess({ user: userStub, session_token: tokenStub })
		);
	});

	it("should call logoutSuccess when the service successfully logout the user", async () => {
		store.dispatch(logout());

		const calledLoginSuccess = await store.waitFor(AUTH_LOGOUT_SUCCESS);

		expect(calledLoginSuccess).toEqual(logoutSuccess());
	});
});
