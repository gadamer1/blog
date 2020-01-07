import React, { useEffect, Context } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_POST_REQUEST,
  FETCH_POST_REQUEST
} from "../../../reducers/post/actions";
import { store } from "../../../reducers/types";
import Renderer from "../../../Components/draft/Renderer";

const Post = () => {
  const { currentPost } = useSelector((state: store) => state.post);
  const { isPostLoading } = useSelector(
    (state: store) => state.post.loadingStates
  );
  if (isPostLoading) {
    return (
      <>
        <div>로딩중 입니다!</div>
      </>
    );
  } else {
    return (
      <>
        <h1>{currentPost.title}</h1>
        <h1>{currentPost.nickname}</h1>
        <h1>{currentPost.Date}</h1>
        {currentPost && <Renderer raw={JSON.parse(currentPost.body)} />}
      </>
    );
  }
};

Post.getInitialProps = ctx => {
  const { title, category } = ctx.query;

  ctx.store.dispatch({
    type: FETCH_POST_REQUEST,
    payload: {
      title,
      category
    }
  });
  return {};
};

export default Post;
