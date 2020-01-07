import React from "react";
import { NextPage, NextPageContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import nextCookie from "next-cookies";
import { store } from "../..//reducers/types";
import IsLoadingUser from "../../Components/IsLoadingUser";

const Profile: NextPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: store) => state.user.metaStates);

  if (isLoggedIn) {
    return <div>hi</div>;
  } else {
    return <IsLoadingUser />;
  }
};

Profile.getInitialProps = async ctx => {};

export default Profile;
