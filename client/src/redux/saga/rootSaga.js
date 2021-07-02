import { all } from "redux-saga/effects";
import userSaga from "../../module/user/saga/userSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
}
