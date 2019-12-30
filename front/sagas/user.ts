import { all, fork } from "redux-saga/effects";

function* watchLogin() {}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
