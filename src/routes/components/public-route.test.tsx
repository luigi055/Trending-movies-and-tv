import { Provider } from "react-redux";
import { setStore } from "services/redux";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoute } from "./public-route";
import storeInitialState from "services/redux/initial-state";
import { DASHBOARD } from "routes/routes-config";

const DummyComponent = () => <div>Dummy!</div>;
describe("Testing the PublicRoute Component", () => {
	it("should render the dummy component when the user is not authenticated", () => {
		render(
			<Provider store={setStore()}>
				<Router>
					<PublicRoute component={DummyComponent} />
				</Router>
			</Provider>
		);
		const { getByText } = screen;

		const dummyText = getByText("Dummy!");
		expect(dummyText).toBeInTheDocument();
	});

	it("should go to the dashboard route when the user is authenticated", () => {
		const tokenStub =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";
		let clonedState = Object.assign({}, storeInitialState) as State;

		clonedState.authentication = {
			...clonedState.authentication,
			session_token: tokenStub,
		};

		render(
			<Provider store={setStore(clonedState)}>
				<Router>
					<PublicRoute component={DummyComponent} />
				</Router>
			</Provider>
		);
		const { queryByText } = screen;

		expect(window.location.pathname).toBe(DASHBOARD);

		const dummyText = queryByText("Dummy!");
		expect(dummyText).not.toBeInTheDocument();
	});
});
