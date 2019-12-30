import produce from "immer";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";
import { userActions, userStore } from "./types";

/*INITIAL STATE */
const initialState: userStore = {
  user: null,
  loadingStates: {
    isLoging: false,
    isSigning: false
  }
};

export default (state = initialState, action: userActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        break;
      }
      case LOGIN_SUCCESS: {
        state.user = action.data;
        break;
      }
      case LOGIN_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};
