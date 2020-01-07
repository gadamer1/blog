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
  LOG_OUT_FAILURE,
  GET_USER_BY_NICKNAME_REQUEST,
  GET_USER_BY_NICKNAME_SUCCESS,
  GET_USER_BY_NICKNAME_FAILURE
} from "./actions";
import { userActions, userStore } from "./interfaces";

/*INITIAL STATE */
const initialState: userStore = {
  me: null,
  userInfo: null,
  loadingStates: {
    isLoging: false,
    isSigning: false,
    isLogouting: false,
    isLoadingUser: false
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
        draft.me = action.result.user;
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
        draft.me = action.result.user;
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
        draft.me = null;
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
        draft.me = action.result.user;

        draft.metaStates.isLoggedIn = true;
        break;
      }
      case LOAD_USER_FAILURE: {
        draft.metaStates.isLoggedIn = false;
        draft.me = null;
        break;
      }

      case GET_USER_BY_NICKNAME_REQUEST: {
        draft.loadingStates.isLoadingUser = true;
      }
      case GET_USER_BY_NICKNAME_SUCCESS: {
        draft.loadingStates.isLoadingUser = false;
        // @ts-ignore
        draft.userInfo = action.result;
      }
      case GET_USER_BY_NICKNAME_FAILURE: {
        draft.loadingStates.isLoadingUser = false;
      }

      default: {
        break;
      }
    }
  });
};
