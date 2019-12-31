import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";
import { Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const Auth: React.FC = () => {
  const { isLoggedIn } = useSelector((state: store) => state.user.metaStates);

  if (isLoggedIn) {
    return (
      <Button href="profile">
        <Typography></Typography>
      </Button>
    );
  } else {
    return (
      <>
        <Button color="inherit" href="/login">
          <Typography>로그인</Typography>
        </Button>
        <Button color="inherit" href="/signup">
          <Typography>회원 가입</Typography>
        </Button>
      </>
    );
  }
};

export default Auth;
