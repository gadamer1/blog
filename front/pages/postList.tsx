import React from "react";
import { NextPage, NextPageContext } from "next";
import { Link } from "@material-ui/core";
import axios from "axios";

const PostList: NextPage = () => {
  return <Link href="post/aws/aws 시작방법">글</Link>;
};

PostList.getInitialProps = async (ctx: NextPageContext) => {
  try {
    const posts = await axios.get(`/posts?page=${ctx}`);
    return { posts };
  } catch (e) {
    console.error(e);
    return e;
  }
};

export default PostList;
