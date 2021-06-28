import { all } from "redux-saga/effects";
import SagaTester from "redux-saga-tester";
import initialState from "./initial-state";
import { reduceAuthentication } from "./reducer";
import { authenticationSagas } from "./sagas";
import {
	login,
	logout,
	AUTH_LOGOUT_FAILED,
	AUTH_LOGIN_FAILED,
	loginFailed,
	logoutFailed,
} from "./actions";
import { selectSessionToken, selectUser } from "./selectors";

jest.mock("utilities/get-domain-user-by-token");
jest.mock("services/firebase/authentication", () => ({
	async loginWithGithub() {
		return await new Promise((_resolve, reject) => reject("mytoken"));
	},
	async logout() {
		return await new Promise((_resolve, reject) => reject(null));
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

	it("should call loginFailed when the provider have had a problem", async () => {
		store.dispatch(login());

		const calledLoginFailed = await store.waitFor(AUTH_LOGIN_FAILED);

		const state = {
			authentication: store.getState(),
		} as State;

		expect(calledLoginFailed).toEqual(loginFailed());
		expect(selectUser(state)).toEqual(null);
		expect(selectSessionToken(state)).toEqual(null);
	});

	it("should call logoutFailed when the service fails to logout the user", async () => {
		store.dispatch(logout());

		const calledLoginSuccess = await store.waitFor(AUTH_LOGOUT_FAILED);

		expect(calledLoginSuccess).toEqual(logoutFailed());
	});
});
