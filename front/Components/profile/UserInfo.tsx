import React from "react";
import { Card, Typography } from "@material-ui/core";
import { NextComponentType, NextPage } from "next";
import { user } from "../../reducers/user/interfaces";

const UserInfo: NextPage<{ user: user }> = ({ user }) => {
  return (
    <Card>
      <Typography>{user.nickname}</Typography>
      <Typography>{user.email}</Typography>
    </Card>
  );
};

export default UserInfo;
