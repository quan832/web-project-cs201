import { all, call, takeEvery, put } from "redux-saga/effects";
import Api from "../../../util/api/apiUtil";
import {
  FETCH_MOVIE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_DETAIL_SUCCESS,
  FETCH_MOVIE_SUCCESS,
} from "../action/movieAction";

function* fetchMovie() {
  try {
    const { data } = yield call(Api.fetchMovie);

    yield put({ type: FETCH_MOVIE_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
  }
}

function* fetchMovieDetail({ payload }) {
  try {
    const { data } = yield call(Api.fetchMovieDetail, payload);

    yield put({ type: FETCH_MOVIE_DETAIL_SUCCESS, payload: data });
  } catch {}
}

function* watchFetchMovie() {
  yield takeEvery(FETCH_MOVIE, fetchMovie);
}

function* watchFetchDetailMovie() {
  yield takeEvery(FETCH_MOVIE_DETAIL, fetchMovieDetail);
}

export default function* movieSaga() {
  yield all([watchFetchMovie(), watchFetchDetailMovie()]);
}
