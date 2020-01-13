import { all, fork } from "redux-saga/effects";
import user from "./user";
import post from "./post";
import axios from "axios";

axios.defaults.baseURL = "https://gadamer1-blog.appspot.com/api";

export default function* rootSaga() {
  yield all([fork(user), fork(post)]);
}
