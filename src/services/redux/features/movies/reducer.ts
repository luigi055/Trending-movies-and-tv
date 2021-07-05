import initialState from "./initial-state";
import {
  MOVIES_GET_MOVIES_SUCCESS,
  MOVIES_GET_SERIES_SUCCESS,
} from "./actions";

const authenticationStateHandlers: Record<string, Function> = {
  [MOVIES_GET_MOVIES_SUCCESS]: (
    state: MoviesState,
    action: ActionPayloadRequired<MoviesState["movies"]>
  ) => ({ ...state, movies: action.payload }),
  [MOVIES_GET_SERIES_SUCCESS]: (
    state: MoviesState,
    action: ActionPayloadRequired<MoviesState["series"]>
  ) => ({ ...state, series: action.payload }),
};

export const reduceMovies = (
  state: MoviesState = initialState,
  action: ActionStandard<IMovie>
) => {
  const handler = authenticationStateHandlers[action.type];
  const hasHandler = !!handler;

  return hasHandler ? handler(state, action) : state;
};
