import Firebase from "firebase/app";
import "firebase/auth";

if (!Firebase.apps.length) {
  var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
  };
  Firebase.initializeApp(config);
}

export const githubProvider = new Firebase.auth.GithubAuthProvider();
githubProvider.addScope("repo");

export default Firebase;
