import {
  MOVIES_GET_MOVIES,
  MOVIES_GET_SERIES,
  getMoviesSuccess,
  getMoviesFailed,
  getSeriesSuccess,
  getSeriesFailed,
} from "./actions";
import { put, call, takeLatest, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { startLoading, stopLoading } from "../loading";
import { fetchTrendingMoviesByPage } from "services/movies";
import { adaptRawMovieToMovie, adaptRawMovieToSerie } from "models/movie";

export function* proccessMovies(): SagaIterator {
  try {
    yield put(startLoading());

    const rawMovies: RawTMDBMovie[] = yield call(
      fetchTrendingMoviesByPage,
      1,
      "movie"
    );
    const movies = rawMovies?.map(adaptRawMovieToMovie);

    yield put(getMoviesSuccess(movies));
  } catch (error) {
    yield put(getMoviesFailed());
  } finally {
    yield put(stopLoading());
  }
}
export function* proccessSeries(): SagaIterator {
  try {
    yield put(startLoading());

    const rawSeries: RawTMDBSerie[] = yield call<any>(
      fetchTrendingMoviesByPage,
      1,
      "tv"
    );

    fetchTrendingMoviesByPage(1, "tv");
    const series = rawSeries?.map(adaptRawMovieToSerie);

    yield put(getSeriesSuccess(series));
  } catch (error) {
    yield put(getSeriesFailed());
  } finally {
    yield put(stopLoading());
  }
}

function* fetchMovies() {
  yield takeLatest(MOVIES_GET_MOVIES, proccessMovies);
  yield takeLatest(MOVIES_GET_SERIES, proccessSeries);
}

export const moviesSagas = [fork(fetchMovies)];
