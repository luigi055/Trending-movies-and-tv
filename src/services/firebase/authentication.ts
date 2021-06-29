import Firebase, { githubProvider } from "./config";

export const loginWithGithub = async () => {
	try {
		const result = await Firebase.auth().signInWithPopup(githubProvider);
		const token = await result.user?.getIdToken();

		return token;
	} catch (error) {
		alert("Error trying to login with github");
	}
};

export const logout = async () => {
	try {
		await Firebase.auth().signOut();
	} catch (error) {
		alert("Error trying to logout");
	}
};
