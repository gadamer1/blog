import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Router from "next/router";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignUpForm from "../Components/SignUp/SignUpForm";
import { JWTwithAuthSync } from "../utils/token";
import { NextPage } from "next";
import nextCookie from "next-cookies";
import { useSelector } from "react-redux";
import { store } from "../reducers/types";
import IsAleadyLoggedIn from "../Components/IsAleadyLoggedIn";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const SignUp = () => {
  const classes = useStyles({});
  const { isLoggedIn } = useSelector((state: store) => state.user.metaStates);
  const { nickname } = useSelector((state: store) => state.user.user);
  useEffect(() => {
    if (isLoggedIn) {
      Router.push(`/profile/${nickname}`);
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <IsAleadyLoggedIn />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
            <SignUpForm />
          </div>
        </Container>
      )}
    </>
  );
};

export default SignUp;
