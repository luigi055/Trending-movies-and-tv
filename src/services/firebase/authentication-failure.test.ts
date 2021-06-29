import { loginWithGithub, logout } from "./authentication";

const tokenStub =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";
const mockSignOUt = jest.fn();
jest.mock("./config", () => ({
	auth() {
		return {
			signInWithPopup() {
				return new Promise((_resolve, reject) => {
					reject();
				});
			},

			signOut: () =>
				new Promise((_resolve, reject) => {
					reject();
				}),
		};
	},
}));

describe("Testing the authentication service", () => {
	beforeEach(() => {
		window.alert = jest.fn();
	});

	it("should alert the user notifying the error when there is an error trying login", async () => {
		await loginWithGithub();

		expect(window.alert).toHaveBeenCalledWith(
			"Error trying to login with github"
		);
	});

	it("should alert the user notifying that there is an error trying to logout", async () => {
		await logout();

		expect(window.alert).toHaveBeenCalledWith("Error trying to logout");
	});
});
