import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import UserInfo from "./UserInfo";
import UserPostList from "./UserPostList";
import { store } from "../../reducers/types";

const ProfileContaier = () => {
  const { user, postList } = useSelector((state: store) => state.user.userInfo);

  if (user) {
    return (
      <Container>
        <UserInfo user={user} />
        <UserPostList postList={postList} />
      </Container>
    );
  } else {
    return <div>로딩중</div>;
  }
};

export default ProfileContaier;
