import React, { useEffect, Context } from "react";
import { NextPage, NextPageContext } from "next";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { store } from "../../reducers/types";
import { post } from "../../reducers/post/interfaces";

interface posts extends NextPageContext {
  posts: post[];
}

const Post: NextPage<posts> = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: store) => state.post);

  return <div></div>;
};

export default Post;
