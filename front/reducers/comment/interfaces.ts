import {
  LOAD_COMMENTS_BY_ID_REQUEST,
  LOAD_COMMENTS_BY_ID_SUCCESS,
  LOAD_COMMENTS_BY_ID_FAILURE
} from "./actions";

/////////////////////STATES///////////////

export interface comment {
  authorId: string;
  body: string;
  img: string;
  date: Date;
}

///////////////////ACTIONS////////////////

/* 유저 아디로 댓글들 가져오기*/
export interface loadCommentsByIdRequestAction {
  type: typeof LOAD_COMMENTS_BY_ID_REQUEST;
  payload: {
    authorId: string;
  };
}

export interface loadCommentsByIdSuccessAction {
  type: typeof LOAD_COMMENTS_BY_ID_SUCCESS;
  result: comment[];
}

export interface loadCommentsByIdFailureAction {
  type: typeof LOAD_COMMENTS_BY_ID_FAILURE;
}

//////////////STORE/////////
export interface commentStore {
  comment: comment;
}
