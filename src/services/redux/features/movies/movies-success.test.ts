import { all } from "redux-saga/effects";
import fetchMock from "fetch-mock";
import SagaTester from "redux-saga-tester";
import initialState from "./initial-state";
import { reduceMovies } from "./reducer";
import { moviesSagas } from "./sagas";
import {
	getMovies,
	getSeries,
	getMoviesSuccess,
	getSeriesSuccess,
	MOVIES_GET_MOVIES_SUCCESS,
	MOVIES_GET_SERIES_SUCCESS,
} from "./actions";
import { selectMovies, selectSeries } from "./selectors";
import { adaptRawMovieToMovie, adaptRawMovieToSerie } from "models/movie";

process.env.REACT_APP_TMDB_API_URI = "https://api.themoviedb.org/3";

const rawTMDB = {
	id: "k2m3",
	poster_path: "/image.jpg",
	release_date: "2020-13-01",
	vote_average: 7.5,
};

const rawMovie = { ...rawTMDB, title: "fake title" };
const rawSerie = { ...rawTMDB, name: "fake name" };

fetchMock.mock(
	`${process.env.REACT_APP_TMDB_API_URI}/trending/movie/day?page=1`,
	200,
	{
		response: { results: [rawMovie] },
	}
);
fetchMock.mock(
	`${process.env.REACT_APP_TMDB_API_URI}/trending/tv/day?page=1`,
	200,
	{
		response: { results: [rawSerie] },
	}
);

function* sagas() {
	yield all([...moviesSagas]);
}

describe("Testing the Movies feature", () => {
	let store: SagaTester<State["movies"]> = new SagaTester({});

	beforeEach(() => {
		store = new SagaTester({
			initialState,
			reducers: reduceMovies as any,
		});
		store.start(sagas);
	});

	it("should call getMoviesSuccess correctly", async () => {
		const moviesStubbed = [adaptRawMovieToMovie(rawMovie)];
		store.dispatch(getMovies());

		const calledLoginSuccess = await store.waitFor(MOVIES_GET_MOVIES_SUCCESS);
		const state = {
			movies: store.getState(),
		} as State;

		expect(calledLoginSuccess).toEqual(getMoviesSuccess(moviesStubbed));
		expect(selectMovies(state)).toEqual(moviesStubbed);
		expect(selectSeries(state)).toEqual([]);
	});

	it("should call getSeriesSuccess correctly", async () => {
		const moviesStubbed = [adaptRawMovieToSerie(rawSerie)];
		store.dispatch(getSeries());

		const calledgetSeriesSuccess = await store.waitFor(
			MOVIES_GET_SERIES_SUCCESS
		);
		const state = {
			movies: store.getState(),
		} as State;

		expect(calledgetSeriesSuccess).toEqual(getSeriesSuccess(moviesStubbed));
		expect(selectSeries(state)).toEqual(moviesStubbed);
		expect(selectMovies(state)).toEqual([]);
	});
});
