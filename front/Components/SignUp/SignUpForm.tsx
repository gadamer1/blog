import React, { FunctionComponent, useState } from "react";
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
  Button,
  Typography
} from "@material-ui/core";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../reducers/types";
import validateEmailInput from "../../utils/validateEmailInput";
import { SIGN_UP_REQUEST } from "../../reducers/user/actions";
import CircularProgressComponent from "../../utils/Components/CircularProgressComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
);

const SignUpForm: FunctionComponent = () => {
  const { isSigning } = useSelector((state: store) => state.user.loadingStates);
  const dispatch = useDispatch();
  const classes = useStyles({});
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const handleSubmitForm = event => {
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
    if (password.length < 8) {
      setPasswordCheckError("비밀번호의 길이는 8자이상으로 입력해주세요");
      validate = false;
    }
    if (passwordCheck.trim() === "") {
      setPasswordCheckError("비밀번호 확인란을 입력해주세요");
      validate = false;
    }
    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 같지 않습니다");
      validate = false;
    }
    if (validate) {
      dispatch({
        type: SIGN_UP_REQUEST,
        payload: {
          email,
          nickname,
          password
        }
      });
    }
  };

  const handleNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (nicknameError) {
      setNicknameError("");
    }
    setNickname(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailError) {
      setEmailError("");
    }
    setEmail(event.target.value);
  };
  const handdlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordError) {
      setPasswordError("");
    }
    if (event.target.value === passwordCheck) {
      setPasswordCheckError("");
    }
    setPassword(event.target.value);
  };
  const handdlePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordCheckError) {
      setPasswordCheckError("");
    }
    setPasswordCheck(event.target.value);
  };

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmitForm}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={!!nicknameError}
            helperText={nicknameError}
            autoComplete="nickname"
            name="nickname"
            variant="outlined"
            required
            fullWidth
            id="nickname"
            label="닉네임"
            autoFocus
            value={nickname}
            onChange={handleNickname}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            error={!!emailError}
            helperText={emailError}
            variant="outlined"
            required
            fullWidth
            id="email"
            label="이메일 주소"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!passwordError}
            helperText={passwordError}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handdlePassword}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!passwordCheckError}
            helperText={passwordCheckError}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="비밀번호 확인"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordCheck}
            onChange={handdlePasswordCheck}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="알람을 받고 싶습니다. 이메일을 통해 알람을 받을래요! "
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isSigning}
      >
        {isSigning ? (
          <CircularProgressComponent />
        ) : (
          <Typography>회원가입</Typography>
        )}
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            계정이 이미 있나요? 로그인
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
