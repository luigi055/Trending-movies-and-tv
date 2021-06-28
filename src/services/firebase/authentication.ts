import Firebase from "./config";
const githubProvider = new Firebase.auth.GithubAuthProvider();
githubProvider.addScope("repo");

export const loginWithGithub = async () => {
	try {
		const result = await Firebase.auth().signInWithPopup(githubProvider);
		const token = await result.user?.getIdToken();

		return token;
	} catch (error) {
		console.error("Error trying to login with github", error);
		alert("Error trying to login with github");
	}
};

export const logout = async () => {
	await Firebase.auth().signOut();
};
