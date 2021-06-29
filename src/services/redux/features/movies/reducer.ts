import initialState from "./initial-state";
import {
	MOVIES_GET_MOVIES_SUCCESS,
	MOVIES_GET_SERIES_SUCCESS,
} from "./actions";

const authenticationStateHandlers: Record<string, Function> = {
	[MOVIES_GET_MOVIES_SUCCESS]: (
		state: State["movies"],
		action: ActionPayloadRequired<State["movies"]["movies"]>
	) => ({ ...state, movies: action.payload }),
	[MOVIES_GET_SERIES_SUCCESS]: (
		state: State["movies"],
		action: ActionPayloadRequired<State["movies"]["series"]>
	) => ({ ...state, series: action.payload }),
};

export const reduceMovies = (
	state: State["movies"] = initialState,
	action: ActionStandard<IUser>
) => {
	const handler = authenticationStateHandlers[action.type];
	const hasHandler = !!handler;

	return hasHandler ? handler(state, action) : state;
};
