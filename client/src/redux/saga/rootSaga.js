import { all } from "redux-saga/effects";
import movieSaga from "../../module/movie/saga/movieSaga";
import userSaga from "../../module/user/saga/userSaga";

export default function* rootSaga() {
  yield all([userSaga(), movieSaga()]);
}
