import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../reducers/types";
import { Typography, Button } from "@material-ui/core";
import { JWTlogout } from "../../utils/token";
import { LOG_OUT_REQUEST } from "../../reducers/user/actions";

const Auth: React.FC = () => {
  const { isLoggedIn } = useSelector((state: store) => state.user.metaStates);
  const user = useSelector((state: store) => state.user.me);
  const dispatch = useDispatch();

  const _onClickLogout = () => {
    JWTlogout();
    dispatch({
      type: LOG_OUT_REQUEST
    });
  };

  if (isLoggedIn) {
    return (
      <>
        {user && <Typography>반갑습니다 {user.nickname}님</Typography>}
        <Button color="inherit" href={`/profile/${user.nickname}`}>
          <Typography>프로필</Typography>
        </Button>
        <Button color="inherit" onClick={_onClickLogout}>
          <Typography>로그아웃</Typography>
        </Button>
        {user.admin && (
          <Button color="inherit" href="/admin/console">
            <Typography>콘솔</Typography>
          </Button>
        )}
      </>
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
