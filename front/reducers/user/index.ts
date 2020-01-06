import produce from "immer";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
} from "./actions";
import { userActions, userStore } from "./interfaces";

/*INITIAL STATE */
const initialState: userStore = {
  user: null,
  loadingStates: {
    isLoging: false,
    isSigning: false,
    isLogouting: false
  },
  metaStates: {
    isLoggedIn: false,
    loginStautsCode: 0,
    signUpStatusCode: 0
  }
};

const mockUser = {
  nickname: "gadamer",
  emailVerified: false
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
        draft.metaStates.loginStautsCode = 200;
        draft.metaStates.isLoggedIn = true;
        draft.user = action.result.user;
        break;
      }
      case LOGIN_FAILURE: {
        draft.loadingStates.isLoging = false;
        draft.metaStates.loginStautsCode = action.errorCode;
        draft.metaStates.isLoggedIn = false;
      }
      case SIGN_UP_REQUEST: {
        draft.loadingStates.isSigning = true;
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.loadingStates.isSigning = false;
        draft.user = action.result.user;
        draft.metaStates.isLoggedIn = true;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.loadingStates.isSigning = false;
        draft.metaStates.signUpStatusCode = action.errorCode;
        draft.metaStates.isLoggedIn = false;
        break;
      }
      // 로그아웃
      case LOG_OUT_REQUEST: {
        draft.loadingStates.isLogouting = true;
      }
      case LOG_OUT_SUCCESS: {
        draft.user = null;
        draft.loadingStates.isLogouting = false;
        draft.metaStates.isLoggedIn = false;
      }
      case LOG_OUT_FAILURE: {
        draft.loadingStates.isLogouting = false;
      }

      // 회원정보 가져오기

      case LOAD_USER_REQUEST: {
        break;
      }
      case LOAD_USER_SUCCESS: {
        draft.user = action.result.user;
        draft.metaStates.isLoggedIn = true;
        break;
      }
      case LOAD_USER_FAILURE: {
        draft.metaStates.isLoggedIn = false;
        draft.user = null;
        break;
      }
      default: {
        break;
      }
    }
  });
};
