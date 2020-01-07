import produce from "immer";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  MAKE_POST_REQUEST,
  MAKE_POST_SUCCESS,
  MAKE_POST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from "./actions";
import { postStore } from "./interfaces";

const initialState: postStore = {
  posts: null,
  currentPost: null,
  loadingStates: {
    isPostLoading: false,
    isPosting: false,
    isPostingSuccess: false,
    isPostsLoading: false
  },
  metaStates: {
    getPostStatusCode: 0,
    getPostsStatusCode: 0,
    postStautsCode: 0
  }
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_REQUEST: {
        draft.loadingStates.isPostLoading = true;
        break;
      }
      case GET_POSTS_SUCCESS: {
        draft.loadingStates.isPostLoading = false;
        draft.posts = action.result;
        break;
      }
      case GET_POSTS_FAILURE: {
        draft.loadingStates.isPostLoading = false;
        break;
      }

      case MAKE_POST_REQUEST: {
        draft.loadingStates.isPosting = true;
        break;
      }
      case MAKE_POST_SUCCESS: {
        draft.loadingStates.isPostingSuccess = true;
        draft.loadingStates.isPosting = false;
        draft.posts = action.result;
        break;
      }
      case MAKE_POST_FAILURE: {
        draft.loadingStates.isPosting = false;
        draft.loadingStates.isPostingSuccess = false;
        break;
      }

      case GET_POST_REQUEST: {
        draft.loadingStates.isPostLoading = true;
        break;
      }

      case GET_POST_SUCCESS: {
        draft.currentPost = action.result;
        draft.loadingStates.isPostLoading = false;
        break;
      }
      case GET_POST_FAILURE: {
        draft.loadingStates.isPostLoading = false;
        break;
      }

      case FETCH_POST_REQUEST: {
        draft.loadingStates.isPostLoading = true;

        break;
      }

      case FETCH_POST_SUCCESS: {
        draft.currentPost = action.result;
        draft.loadingStates.isPostLoading = false;
        break;
      }
      case FETCH_POST_FAILURE: {
        draft.loadingStates.isPostLoading = false;

        break;
      }

      default: {
        break;
      }
    }
  });
};
