import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
  MAKE_POST_REQUEST,
  MAKE_POST_SUCCESS,
  MAKE_POST_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../reducers/post/actions";
import axios from "axios";

function makePostAPI(data) {
  return axios.post("/post", data, {
    withCredentials: true
  });
}

function* makePost(action) {
  try {
    const Post = yield call(makePostAPI, action.payload);
    yield put({
      type: MAKE_POST_SUCCESS,
      result: {
        body: Post.data.post,
        nickname: Post.data.nickname,
        date: Post.data.date,
        title: Post.data.title,
        _id: Post.data._id
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: MAKE_POST_FAILURE,
      error: e.response
    });
  }
}

function* watchMakePost() {
  yield takeLatest(MAKE_POST_REQUEST, makePost);
}

function getPostsAPI() {
  return axios.get("/posts", {
    withCredentials: true
  });
}

function* getPosts() {
  try {
    const Posts = yield call(getPostsAPI);
    yield put({
      type: GET_POSTS_SUCCESS,
      result: Posts.data.postLists
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_POSTS_FAILURE,
      error: e.response
    });
  }
}

function* watchGetPosts() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
}

export default function* postSaga() {
  yield all([fork(watchMakePost), fork(watchGetPosts)]);
}
