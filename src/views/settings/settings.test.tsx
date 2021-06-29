import { render, screen } from "@testing-library/react";
import Settings from "./settings";
import { logout } from "services/redux/features/authentication/actions";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
}));

jest.mock("services/redux/features/authentication/actions");

const signOutButtonTestId = "signout__btn";

describe("Testing the Settings page", () => {
	beforeEach(() => {
		render(
			<Router>
				<Settings />
			</Router>
		);
	});

	it("should show the settings title", () => {
		const { getByTestId } = screen;

		const dashboardTitle = getByTestId("settings__title");

		expect(dashboardTitle).toHaveTextContent("Settings");
	});

	it("should show the correct header title", () => {
		const { getByTestId } = screen;

		const dashboardTitle = getByTestId("header__title");

		expect(dashboardTitle).toHaveTextContent("Settings");
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
