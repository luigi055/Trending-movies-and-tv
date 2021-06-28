import { all } from "redux-saga/effects";
import { authenticationSagas } from "./features/authentication/sagas";

export default function* rootSagas() {
	yield all([...authenticationSagas]);
}
