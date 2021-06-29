import { storeInitialState } from "services/redux";

export const generateMovies = ({
	movies = [],
	series = [],
	isLoading = false,
}: {
	movies?: IMovie[];
	series?: IMovie[];
	isLoading?: boolean;
}): State => {
	let clonedState = Object.assign({}, storeInitialState) as State;

	clonedState.movies = { movies, series };
	clonedState.isLoading = isLoading;

	return clonedState;
};
