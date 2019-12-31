import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  loginRequestAction,
  signUpRequsetAction
} from "../reducers/user/types";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user/actions";

// 회원가입 요청
function signUpAPI(data) {
  return axios.post("/user", data, {
    withCredentials: true
  });
}

function* signUp(action: signUpRequsetAction) {
  try {
    const User = yield call(signUpAPI, action.payload);
    yield put({
      type: SIGN_UP_SUCCESS,
      result: User.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.status
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

// 로그인 요청
function loginAPI(data) {
  return axios.post("/auth", data, {
    withCredentials: true
  });
}

function* login(action: loginRequestAction) {
  try {
    const User = yield call(loginAPI, action.payload);
    yield put({
      type: LOGIN_SUCCESS,
      result: User.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAILURE,
      error: e.status
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
