import { all } from "redux-saga/effects";
import fetchMock from "fetch-mock";
import SagaTester from "redux-saga-tester";
import initialState from "./initial-state";
import { reduceMovies } from "./reducer";
import { moviesSagas } from "./sagas";
import {
	getMovies,
	getSeries,
	getMoviesFailed,
	getSeriesFailed,
	MOVIES_GET_MOVIES_FAILED,
	MOVIES_GET_SERIES_FAILED,
} from "./actions";
import { selectMovies, selectSeries } from "./selectors";
import { adaptRawMovieToMovie, adaptRawMovieToSerie } from "models/movie";

jest.mock("services/movies", () => ({
	fetchTrendingMoviesByPage: () => new Promise((_resolve, reject) => reject()),
}));
beforeEach(() => {
	window.alert = jest.fn();
	window.fetch = () => new Promise((_resolve, reject) => reject());
});

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

	it("should call getMoviesFailed when the service has an error", async () => {
		store.dispatch(getMovies());

		const calledGetMoviesFailed = await store.waitFor(MOVIES_GET_MOVIES_FAILED);

		expect(calledGetMoviesFailed).toEqual(getMoviesFailed());
	});

	it("should call getSeriesFailed when the service has an error", async () => {
		store.dispatch(getSeries());

		const calledGetSeriesFailed = await store.waitFor(MOVIES_GET_SERIES_FAILED);

		expect(calledGetSeriesFailed).toEqual(getSeriesFailed());
	});
});
