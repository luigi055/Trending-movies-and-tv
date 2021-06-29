import { all } from "redux-saga/effects";
import { authenticationSagas } from "./features/authentication/sagas";
import { moviesSagas } from "./features/movies/sagas";

export default function* rootSagas() {
	yield all([...authenticationSagas, ...moviesSagas]);
}
