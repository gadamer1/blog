import produce from "immer";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./actions";

const initialState = {
  posts: [],
  currentPost: null,
  loadingStates: {},
  metaStates: {}
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_POSTS_REQUEST: {
        break;
      }
      case GET_POSTS_SUCCESS: {
        break;
      }
      case GET_POSTS_FAILURE: {
        break;
      }

      default: {
        break;
      }
    }
  });
};
