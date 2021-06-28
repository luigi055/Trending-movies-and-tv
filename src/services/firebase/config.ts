import Firebase from "firebase/app";
import "firebase/auth";

if (!Firebase.apps.length) {
	var config = {
		apiKey: "AIzaSyBkdcoRg-ftwWH3w9GQiZ60Koi59ITU4cg",
		authDomain: "authentication-test-5f0e7.firebaseapp.com",
		projectId: "authentication-test-5f0e7",
		appId: "1:865778397279:web:f49ebbc78e0f7bc4c1abea",
		measurementId: "G-C4F01PLEBJ",
	};
	Firebase.initializeApp(config);
}

export default Firebase;
