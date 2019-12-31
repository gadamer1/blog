import produce from "immer";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST
} from "./actions";
import { userActions, userStore } from "./types";

/*INITIAL STATE */
const initialState: userStore = {
  user: null,
  loadingStates: {
    isLoging: false,
    isSigning: false
  },
  metaStates: {
    isLoggedIn: false,
    loginStautsCode: 0,
    signUpStatusCode: 0
  }
};

export default (state = initialState, action: userActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST: {
        draft.loadingStates.isLoging = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.loadingStates.isLoging = false;
        draft.metaStates.isLoggedIn = true;
        draft.metaStates.loginStautsCode = 200;
        draft.user = action.result;
        break;
      }
      case LOGIN_FAILURE: {
        draft.loadingStates.isLoging = false;
        draft.metaStates.loginStautsCode = action.errorCode;
      }
      case SIGN_UP_REQUEST: {
        draft.loadingStates.isSigning = true;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.loadingStates.isSigning = false;
        draft.metaStates.isLoggedIn = true;
        draft.user = action.payload;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.loadingStates.isSigning = false;
        draft.metaStates.signUpStatusCode = action.errorCode;
        break;
      }
      default: {
        break;
      }
    }
  });
};
