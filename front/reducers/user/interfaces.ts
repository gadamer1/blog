import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE
} from "./actions";

///////////////STATES////////////////

/*USER STATE */
export interface user {
  _id: string;
  nickname: string;
  email: string;
  emailVerified: boolean;
}

/* 로딩 상태 */
export interface loadingStates {
  isLoging: boolean;
  isSigning: boolean;
  isLogouting: boolean;
}

/* meta states */
export interface metaStates {
  isLoggedIn: boolean;
  loginStautsCode: number;
  signUpStatusCode: number;
}

///////////// ACTIONS////////////////////

/* 로그인 행위들 */
export interface loginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface loginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  result: {
    user: user;
  };
}
export interface loginFailureAction {
  type: typeof LOGIN_FAILURE;
  errorCode: number;
}

/* 회원가입 행위들 */
export interface signUpRequsetAction {
  type: typeof SIGN_UP_REQUEST;
  payload: {
    email: string;
    password: string;
    nickname: string;
  };
}
export interface signUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  result: {
    user: user;
  };
}
export interface signUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  errorCode: number;
}

// 회원정보 불러오기
export interface loadUserRequestAction {
  type: typeof LOAD_USER_REQUEST;
}

export interface loadUserSuccessAction {
  type: typeof LOAD_USER_SUCCESS;
  result: {
    user: user;
  };
}

export interface loadUserFailureAction {
  type: typeof LOAD_USER_FAILURE;
}

/// 로그아웃
export interface logoutRequestAction {
  type: typeof LOG_OUT_REQUEST;
}

export interface logoutSuccessAction {
  type: typeof LOG_OUT_SUCCESS;
}

export interface logoutFailureAction {
  type: typeof LOG_OUT_FAILURE;
}

export type userActions =
  | loginRequestAction
  | loginSuccessAction
  | loginFailureAction
  | signUpRequsetAction
  | signUpSuccessAction
  | signUpFailureAction
  | logoutRequestAction
  | logoutSuccessAction
  | logoutFailureAction
  | loadUserRequestAction
  | loadUserSuccessAction
  | loadUserFailureAction;
export interface userStore {
  user: user | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}
