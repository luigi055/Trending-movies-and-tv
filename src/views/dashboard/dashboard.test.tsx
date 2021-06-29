import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";
import { logout } from "services/redux/features/authentication/actions";
import { BrowserRouter as Router } from "react-router-dom";
import { DASHBOARD, SETTINGS } from "routes/routes-config";

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
}));

jest.mock("services/redux/features/authentication/actions");

const signOutButtonTestId = "signout__btn";

describe("Testing the Dashboard page", () => {
	beforeEach(() => {
		render(
			<Router>
				<Dashboard />
			</Router>
		);
	});

	it("should show the dashboard title", () => {
		const { getByTestId } = screen;

		const dashboardTitle = getByTestId("dashboard__title");

		expect(dashboardTitle).toHaveTextContent("Secret Dashboard");
	});

	it("should show the correct header title", () => {
		const { getByTestId } = screen;

		const dashboardTitle = getByTestId("header__title");

		expect(dashboardTitle).toHaveTextContent("Dashboard");
	});

	it("should links point to the correct URI", () => {
		const { getByTestId } = screen;

		const sidebarLinkToDashboard = getByTestId("sidebar__nav-link__dashboard");
		const sidebarLinkToSettings = getByTestId("sidebar__nav-link__settings");

		expect(sidebarLinkToDashboard).toHaveAttribute("href", DASHBOARD);
		expect(sidebarLinkToSettings).toHaveAttribute("href", SETTINGS);
	});

	it("should show the logout button with github button", () => {
		const { getByTestId } = screen;
		const signOutButton = getByTestId(signOutButtonTestId);

		expect(signOutButton).toBeInTheDocument();
	});

	it("should call the logout action when the user clicks in the github button", () => {
		const { getByTestId } = screen;
		const signOutButton = getByTestId(signOutButtonTestId);

		signOutButton.click();

		expect(logout).toHaveBeenCalledTimes(1);
	});
});
