import React, { useEffect, Context } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/post/actions";
import { store } from "../../reducers/types";
import { Link } from "@material-ui/core";

const Post = () => {
  const { posts } = useSelector((state: store) => state.post);
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <div>{category}</div>
      {posts &&
        posts.map(post => {
          return (
            <>
              <Link href={`/post/${category}/${post.title}`} key={post._id}>
                <div>{post.title}</div>
                <div>{post.nickname}</div>
              </Link>
            </>
          );
        })}
    </>
  );
};

Post.getInitialProps = async ctx => {
  const { category } = ctx.query;
  ctx.store.dispatch({
    type: GET_POSTS_REQUEST,
    payload: { category }
  });
};

export default Post;
