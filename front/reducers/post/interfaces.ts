import {
  MAKE_POST_FAILURE,
  MAKE_POST_REQUEST,
  MAKE_POST_SUCCESS,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./actions";
// STATES

/*post STATE */
export interface post {
  _id: string;
  nickname: string;
  title: string;
  category: string;
  body: string;
  Date: Date;
}

/* 로딩 상태 */
export interface loadingStates {
  isPosting: boolean;
  isPostsLoading: boolean;
  isPostLoading: boolean;
  isPostingSuccess: boolean;
}

/* meta states */
export interface metaStates {
  postStautsCode: number;
  getPostsStatusCode: number;
  getPostStatusCode: number;
}
export interface postStore {
  posts: {
    dev: post[];
    hacking: post[];
    finance: post[];
    business: post[];
  } | null;
  currentPost: post | null;
  loadingStates: loadingStates;
  metaStates: metaStates;
}

// ACTIONS

/* 포스팅 행위 */
export interface makePostRequestAction {
  type: typeof MAKE_POST_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface makePostSuccessAction {
  type: typeof MAKE_POST_SUCCESS;
  result: post;
}
export interface makePostFailureAction {
  type: typeof MAKE_POST_FAILURE;
  errorCode: number;
}

/* 게시글들 가져오기 */
export interface getPostsRequsetAction {
  type: typeof GET_POSTS_REQUEST;
}
export interface getPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  result: post[];
}
export interface getPostsFailureAction {
  type: typeof GET_POSTS_FAILURE;
  errorCode: number;
}

export type userActions =
  | makePostRequestAction
  | makePostSuccessAction
  | makePostFailureAction
  | getPostsRequsetAction
  | getPostsSuccessAction
  | getPostsFailureAction;
