const context = "movies";

export const MOVIES_GET_MOVIES = `${context}/GET_MOVIES`;
export const MOVIES_GET_SERIES = `${context}/GET_SERIES`;
export const MOVIES_GET_MOVIES_SUCCESS = `${context}/GET_MOVIES_SUCCESS`;
export const MOVIES_GET_MOVIES_FAILED = `${context}/GET_MOVIES_FAILED`;
export const MOVIES_GET_SERIES_SUCCESS = `${context}/GET_SERIES_SUCCESS`;
export const MOVIES_GET_SERIES_FAILED = `${context}/GET_SERIES_FAILED`;

export const getMovies = (): ActionStandardBase => ({
  type: MOVIES_GET_MOVIES,
});

export const getSeries = (): ActionStandardBase => ({
  type: MOVIES_GET_SERIES,
});

export const getMoviesSuccess = (
  payload: State["movies"]["movies"]
): ActionPayloadRequired<State["movies"]["movies"]> => ({
  type: MOVIES_GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesFailed = (): ActionStandardBase => ({
  type: MOVIES_GET_MOVIES_FAILED,
});

export const getSeriesSuccess = (
  payload: State["movies"]["series"]
): ActionPayloadRequired<State["movies"]["series"]> => ({
  type: MOVIES_GET_SERIES_SUCCESS,
  payload,
});

export const getSeriesFailed = (): ActionStandardBase => ({
  type: MOVIES_GET_SERIES_FAILED,
});
