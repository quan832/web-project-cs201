import { all, call, takeEvery, put, takeLatest } from "redux-saga/effects";
import Api from "../../../util/api/apiUtil";
import {
  BOOK_SEAT_BY_ID,
  BOOK_SEAT_BY_ID_ERROR,
  BOOK_SEAT_BY_ID_SUCCESS,
  FETCH_SEAT_BY_SHOWTIME_ID,
  FETCH_SEAT_BY_SHOWTIME_ID_SUCCESS,
} from "../action/seatAction";

function* fetchSeatByShowTimeId({ payload }) {
  try {
    const { data } = yield call(Api.fetchSeatByTimeByID, payload);

    yield put({ type: FETCH_SEAT_BY_SHOWTIME_ID_SUCCESS, payload: data });
  } catch {}
}

function* bookSeatByIds(payload) {
  try {
    const { data } = yield call(Api.bookSeatByIds, payload);
    yield put({ type: BOOK_SEAT_BY_ID_SUCCESS, payload: data });
  } catch {
    yield put({ type: BOOK_SEAT_BY_ID_ERROR });
  }
}

function* watchFetchSeatById() {
  yield takeEvery(FETCH_SEAT_BY_SHOWTIME_ID, fetchSeatByShowTimeId);
}

function* watchBookSeatById() {
  yield takeLatest(BOOK_SEAT_BY_ID, bookSeatByIds);
}

export default function* seatSaga() {
  yield all([watchFetchSeatById(), watchBookSeatById()]);
}
