import React, { useEffect, Context } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const Post: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <div>{category}</div>
    </>
  );
};

export default Post;
