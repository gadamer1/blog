import React from "react";
import { NextPage, NextPageContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../reducers/types";
import IsLoadingUser from "../../Components/IsLoadingUser";
import { GET_USER_BY_NICKNAME_REQUEST } from "../../reducers/user/actions";
import ProfileContaier from "../../Components/profile/ProfileContainer";

const Profile = () => {
  const { isLoggedIn } = useSelector((state: store) => state.user.metaStates);

  if (isLoggedIn) {
    return <ProfileContaier />;
  } else {
    return <IsLoadingUser />;
  }
};

Profile.getInitialProps = async ctx => {
  const { nickname } = ctx.query;
  ctx.store.dispatch({
    type: GET_USER_BY_NICKNAME_REQUEST,
    payload: {
      nickname: nickname
    }
  });
};

export default Profile;
