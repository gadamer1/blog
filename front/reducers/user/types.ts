import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
} from "./actions";

// STATES

/*USER STATE */
export interface user {
  nickname: string;
}

/* 로딩 상태 */
export interface loadingStates {
  isLoging: boolean;
  isSigning: boolean;
}

/* meta states */
export interface metaStates {
  isLoggedIn: boolean;
  loginStautsCode: number;
  signUpStatusCode: number;
}
export interface userStore {
  user: user | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}

// ACTIONS

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
  result: user;
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
  payload: user;
}
export interface signUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  errorCode: number;
}

export type userActions =
  | loginRequestAction
  | loginSuccessAction
  | loginFailureAction
  | signUpRequsetAction
  | signUpSuccessAction
  | signUpFailureAction;
