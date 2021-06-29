export const selectMoviesState = (state: State) => state.movies;
export const selectMovies = (state: State) => selectMoviesState(state).movies;
export const selectSeries = (state: State) => selectMoviesState(state).series;
