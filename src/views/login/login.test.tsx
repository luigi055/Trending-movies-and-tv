import { render, screen } from "@testing-library/react";
import Login from "./login";
import { login } from "services/redux/features/authentication/actions";

jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
}));
jest.mock("services/redux/features/authentication/actions");

describe("Testing the Login page", () => {
	beforeEach(() => {
		render(<Login />);
	});

	it("should show the login with github button", () => {
		const { getByTestId } = screen;
		const githubLoginButton = getByTestId("github-login__btn");

		expect(githubLoginButton).toBeInTheDocument();
	});

	it("should call the login action when the user clicks in the github button", () => {
		const { getByTestId } = screen;
		const githubLoginButton = getByTestId("github-login__btn");

		githubLoginButton.click();

		expect(login).toHaveBeenCalledTimes(1);
	});
});
