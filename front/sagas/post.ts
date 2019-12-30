import { all, fork } from "redux-saga/effects";

function* watchPost() {}

export default function* postSaga() {
  yield all([fork(watchPost)]);
}
