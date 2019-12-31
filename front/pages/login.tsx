import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LOGIN_REQUEST } from "../reducers/user/actions";
import { store } from "../reducers/types";

// loading component
import CircularProgressComponent from "../utils/Components/CircularProgressComponent";

// validate email
import validateEmailInput from "../utils/validateEmailInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
);

export default function SignIn() {
  const classes = useStyles({});
  const { isLoging } = useSelector((state: store) => state.user.loadingStates);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    let validate = true;
    if (!validateEmailInput(email)) {
      setEmailError("올바르지 않은 이메일 주소입니다.");
      validate = false;
    }
    if (email.trim() === "") {
      setEmailError("이메일 주소를 입력해주세요");
      validate = false;
    }
    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요");
      validate = false;
    }
    if (validate) {
      dispatch({
        type: LOGIN_REQUEST,
        payload: {
          email,
          password
        }
      });
    }
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailError) {
      setEmailError("");
    }
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    if (passwordError) {
      setPasswordError("");
    }
    setPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            error={!!emailError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmail}
            helperText={emailError}
          />
          <TextField
            error={!!passwordError}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePassword}
            helperText={passwordError}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="로그인 상태 유지"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoging}
          >
            {isLoging ? (
              <CircularProgressComponent />
            ) : (
              <Typography>로그인</Typography>
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"계정이 없으신가요? 회원가입"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
