import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

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

export interface userStore {
  user: user | null;
  loadingStates: loadingStates;
}

// ACTIONS

/* 로그인 행위들 */
export interface loginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    id: string;
    pw: number;
  };
}
export interface loginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  data: user;
}
export interface loginFailureAction {
  type: typeof LOGIN_FAILURE;
  data: {
    error: string;
  };
}

export type userActions =
  | loginRequestAction
  | loginSuccessAction
  | loginFailureAction;
