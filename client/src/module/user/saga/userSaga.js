import { all, takeLatest, call, put } from "redux-saga/effects";
import Api from "../../../util/api/apiUtil";
import { APP_TOKEN } from "../../../util/constant/constant";
import { LOGIN_USER, RETRIEVE_LOGIN } from "../action/userAction";

function* loginUser({ payload: { email, password } }) {
  try {
    const { data } = yield call(Api.loginUser, { email, password });

    // dispatch to reducer
    yield put({ type: RETRIEVE_LOGIN, payload: data });

    // save in local storage
    localStorage.setItem(APP_TOKEN, data.jwt);
  } catch (err) {
    console.log(err);
  }
}

function* watchUserLogin() {
  yield takeLatest(LOGIN_USER, loginUser);
}

export default function* userSaga() {
  yield all([watchUserLogin()]);
}
