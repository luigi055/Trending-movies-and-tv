import { combineReducers } from "redux";
import { reduceMovies } from "./features/movies/reducer";
import { reduceAuthentication } from "./features/authentication/reducer";
import { reduceLoading } from "./features/loading";

const rootReducers = combineReducers({
	isLoading: reduceLoading,
	authentication: reduceAuthentication,
	movies: reduceMovies,
});

export default rootReducers;
