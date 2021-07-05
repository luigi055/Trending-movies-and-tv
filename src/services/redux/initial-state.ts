import authInitialState from "./features/authentication/initial-state";
import moviesInitialState from "./features/movies/initial-state";

const storeInitialState = {
  isLoading: false,
  authentication: authInitialState,
  movies: moviesInitialState,
};

export default storeInitialState;
