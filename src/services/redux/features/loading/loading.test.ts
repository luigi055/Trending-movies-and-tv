import { Store } from "redux";
import { setStore, storeInitialState } from "services/redux";
import { startLoading, stopLoading } from "./actions";
import { selectIsLoading } from "./selectors";

describe("Testing search songs feature", () => {
	let store: Store;

	beforeEach(() => {
		store = setStore(storeInitialState);
	});

	it("should be false by default", () => {
		expect(selectIsLoading(store.getState())).toBe(false);
	});

	it("should be true when startLoading action is dispatched", () => {
		store.dispatch(startLoading());

		expect(selectIsLoading(store.getState())).toBe(true);
	});

	it("should be false when stopLoading is dispatched after startLoading", () => {
		store.dispatch(startLoading());
		store.dispatch(stopLoading());

		expect(selectIsLoading(store.getState())).toBe(false);
	});
});
