import { all } from "redux-saga/effects";
import movieSaga from "../../module/movie/saga/movieSaga";
import seatSaga from "../../module/seat/saga/seatSaga";
import userSaga from "../../module/user/saga/userSaga";

export default function* rootSaga() {
  yield all([userSaga(), movieSaga(), seatSaga()]);
}
