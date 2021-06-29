import { loginWithGithub, logout } from "./authentication";

const tokenStub =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaWN0dXJlIjoiaHR0dHA6Ly91cmwuY29tL2ltYWdlLnBuZyIsImVtYWlsIjoiam9obmRvZUByZWFjdC5jb20iLCJ1c2VyX2lkIjoiMTJ3ZjN3ZWY0c3NhczUiLCJuYW1lIjoiamhvbiBkb2UifQ.YPTFZ5zV1xHbPGMTAEgASHyQiL4AkmVfT0H707zD9eU";
const mockSignOUt = jest.fn();
jest.mock("./config", () => ({
	auth() {
		return {
			signInWithPopup() {
				return new Promise((resolve) => {
					resolve({
						user: {
							getIdToken() {
								return tokenStub;
							},
						},
					});
				});
			},

			signOut: mockSignOUt,
		};
	},
}));

describe("Testing the authentication service", () => {
	it("should login and get the token", async () => {
		const token = await loginWithGithub();

		expect(token).toBe(tokenStub);
	});

	it("should call the signOut method of firebase auth", async () => {
		await logout();

		expect(mockSignOUt).toHaveBeenCalledTimes(1);
	});
});
