import { combineReducers } from "redux";
import { reduceAuthentication } from "./features/authentication/reducer";
import { reduceLoading } from "./features/loading";

const rootReducers = combineReducers({
	isLoading: reduceLoading,
	authentication: reduceAuthentication,
});

export default rootReducers;
