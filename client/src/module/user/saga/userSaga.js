import { all, takeLatest, call, put } from "redux-saga/effects";
import Api from "../../../util/api/apiUtil";
import { LOGIN_USER, RETRIEVE_LOGIN } from "../action/userAction";

function* loginUser({ email, password }) {
  try {
    const data  = yield call(Api.loginUser, { email, password });

    console.log(data);

    debugger;
    
    if (data.status === 200) {
      yield put({ type: RETRIEVE_LOGIN, payload: { data } });
    }
  } catch {}
}

function* watchUserLogin() {
  yield takeLatest(LOGIN_USER, loginUser);
}

export default function* userSaga() {
  yield all([watchUserLogin()]);
}
