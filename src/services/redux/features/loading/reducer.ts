import { Action } from "redux";
import { START_LOADING, STOP_LOADING } from "./actions";

const loadingStateHandlers: Record<string, Function> = {
	[START_LOADING]: (_state: boolean, _action: Action) => true,
	[STOP_LOADING]: (_state: boolean, _action: Action) => false,
};

const initialState = false;

export const reduceLoading = (
	state: boolean = initialState,
	action: Action
) => {
	const handler = loadingStateHandlers[action.type];
	const hasHandler = !!handler;

	return hasHandler ? handler(state, action) : state;
};
