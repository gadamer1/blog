import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@material-ui/core";
import axios from "axios";
import { GET_POSTS_REQUEST } from "../reducers/post/actions";
import { store } from "../reducers/types";
import PostListContainer from "../Components/PostList/PostListContainer";

const PostList = () => {
  const { isPostLoading } = useSelector(
    (state: store) => state.post.loadingStates
  );
  const posts = useSelector((state: store) => state.post.posts);
  if (isPostLoading) {
    return (
      <>
        <div>로딩중입니다.</div>
      </>
    );
  } else {
    return (
      <div>
        <PostListContainer />
      </div>
    );
  }
};

PostList.getInitialProps = ctx => {
  ctx.store.dispatch({
    type: GET_POSTS_REQUEST
  });

  return {};
};

export default PostList;
