import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {
  MAKE_POST_REQUEST,
  MAKE_POST_SUCCESS,
  MAKE_POST_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
  DELETE_POST_REQUEST
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

function getPostsAPI(data) {
  if (data) {
    const { category } = data;
    return axios.get(`/posts/category/${category}`);
  } else {
    return axios.get("/posts", {
      withCredentials: true
    });
  }
}

function* getPosts(action) {
  try {
    const Posts = yield call(getPostsAPI, action.payload);
    yield put({
      type: GET_POSTS_SUCCESS,
      result: Posts.data.postList
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

function fetchPostAPI(data) {
  return axios.post(`/post/category/title`, data, { withCredentials: true });
}

function* fetchPost(action) {
  try {
    const Post = yield call(fetchPostAPI, action.payload);
    yield put({
      type: FETCH_POST_SUCCESS,
      result: Post.data.post
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FETCH_POST_FAILURE,
      error: e.response
    });
  }
}

function* watchFetchPost() {
  yield takeLatest(FETCH_POST_REQUEST, fetchPost);
}

function deletePostAPI(data) {
  return axios.delete(`/post`, {
    data
  });
}

function* deletePost(action) {
  try {
    const Post = yield call(deletePostAPI, action.payload);
    yield put({
      type: FETCH_POST_SUCCESS,
      result: Post.data.post
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: FETCH_POST_FAILURE,
      error: e.response
    });
  }
}

function* watchDeltePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

export default function* postSaga() {
  yield all([
    fork(watchMakePost),
    fork(watchGetPosts),
    fork(watchFetchPost),
    fork(watchDeltePost)
  ]);
}
