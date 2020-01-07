import React, { useEffect } from "react";
import MakeCategories from "../../Components/admin/MakeCategories/MakeCategories";
import MakePostsContainer from "../../Components/admin/MakePosts/MakePostsContainer";
import { NextPage } from "next";
import { JWTauth } from "../../utils/token";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";
import Router from "next/router";

const Console: NextPage = () => {
  const { me: user } = useSelector((state: store) => state.user);

  useEffect(() => {
    if (!user || !user.admin) {
      Router.push("/login");
    }
  }, [user]);

  return (
    <>
      <MakeCategories />
      <MakePostsContainer />
    </>
  );
};

export default Console;
