import { loginWithGithub, logout } from "./authentication";

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
