import { all, takeLatest, call, put } from "redux-saga/effects";
import Api from "../../../util/api/apiUtil";
import { APP_TOKEN } from "../../../util/constant/constant";
import {
  LOGIN_USER,
  REGISTER_USER,
  RETRIEVE_LOGIN,
} from "../action/userAction";

// lodash
import _ from "lodash";

// make toast
import makeToast from "../../../Components/Alert/Toaster";

function* loginUser({ payload: { email, password } }) {
  try {
    const { data } = yield call(Api.loginUser, { email, password });

    // dispatch to reducer
    yield put({ type: RETRIEVE_LOGIN, payload: data });

    // save in local storage
    localStorage.setItem(APP_TOKEN, data.jwt);

    makeToast("success", `${data.message}`);
  } catch (err) {
    makeToast("error", `${err.response.data.message}`);
  }
}

function* registerUser({ payload: { email, password, username } }) {
  try {
    const {
      data: { message },
    } = yield call(Api.registerUser, {
      email,
      password,
      username,
    });

    // alert
    makeToast("success", `${message}`);

    // if register oke will login
    const { data } = yield call(Api.loginUser, { email, password });

    if (!_.isEmpty(data.jwt)) {
      // dispatch to reducer
      yield put({ type: RETRIEVE_LOGIN, payload: data });

      // save in local storage
      localStorage.setItem(APP_TOKEN, data.jwt);
    }
  } catch (err) {
    makeToast("error", `${err.response.data.message}`);
  }
}

function* watchUserLogin() {
  yield takeLatest(LOGIN_USER, loginUser);
}

function* watchRegisterUser() {
  yield takeLatest(REGISTER_USER, registerUser);
}

export default function* userSaga() {
  yield all([watchUserLogin(), watchRegisterUser()]);
}
