import React from "react";
import { useSelector } from "react-redux";
import { store } from "../reducers/types";
import PostListContainer from "../Components/PostList/PostListContainer";

const PostList = () => {
  const { isPostLoading } = useSelector(
    (state: store) => state.post.loadingStates
  );
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

export default PostList;
