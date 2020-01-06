import {
  all,
  fork,
  put,
  takeLatest,
  call,
  actionChannel
} from "redux-saga/effects";
import axios from "axios";
import {
  loginRequestAction,
  signUpRequsetAction
} from "../reducers/user/interfaces";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
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
      result: User.data.user
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.status
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

// 로그인 요청
function loginAPI(data) {
  return axios.post("/user/login", data, {
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
    yield put({
      type: LOGIN_FAILURE,
      error: e.response.status
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function loadUserAPI() {
  return axios.get("/user/is-login", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    const User = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      result: User.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e.response
    });
  }
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function logoutAPI() {
  return axios.get("/user/logout", {
    withCredentials: true
  });
}

function* logout() {
  try {
    const User = yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response
    });
  }
}

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLoadUser),
    fork(watchLogout)
  ]);
}
