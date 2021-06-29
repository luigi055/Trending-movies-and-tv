import { setStore } from "services/redux";
import { cleanup, render, screen } from "@testing-library/react";
import { PrivateRoute } from "./private-route";
import storeInitialState from "services/redux/initial-state";
import { LOGIN } from "routes/routes-config";
import { createMemoryHistory } from "history";
import { ConnectedComponent } from "utilities/test-utils/wrappers";

const generateMockedTokenStore = (tokenValue?: string | null) => {
	let clonedState = Object.assign({}, storeInitialState) as State;

	clonedState.authentication = {
		...clonedState.authentication,
		session_token: tokenValue,
	};

	return clonedState;
};

const DummyComponent = () => <div>Dummy!</div>;
describe("Testing the PublicRoute Component", () => {
	let history = createMemoryHistory();
	beforeEach(cleanup);
	beforeEach(() => {
		history = createMemoryHistory();
	});
	it("should render the dummy component when the user is authenticated", () => {
		const tokenStub =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";
		const state = generateMockedTokenStore(tokenStub);

		render(
			<ConnectedComponent store={setStore(state)} history={history}>
				<PrivateRoute component={DummyComponent} />
			</ConnectedComponent>
		);
		const { getByText } = screen;

		const dummyText = getByText("Dummy!");
		expect(dummyText).toBeInTheDocument();
	});

	it("should go to the Login route when the user is checked and not authenticated", () => {
		const state = generateMockedTokenStore(null);

		render(
			<ConnectedComponent store={setStore(state)} history={history}>
				<PrivateRoute component={DummyComponent} />
			</ConnectedComponent>
		);
		const { queryByText } = screen;
		const dummyText = queryByText("Dummy!");

		expect(history.location.pathname).toBe(LOGIN);
		expect(dummyText).not.toBeInTheDocument();
	});

	it("should show anything when there is not authenticated user and no redirect", () => {
		const state = generateMockedTokenStore(undefined);

		render(
			<ConnectedComponent store={setStore(state)} history={history}>
				<PrivateRoute component={DummyComponent} />
			</ConnectedComponent>
		);
		const { queryByText } = screen;
		const dummyText = queryByText("Dummy!");

		expect(history.location.pathname).toBe("/");
		expect(dummyText).not.toBeInTheDocument();
	});
});
