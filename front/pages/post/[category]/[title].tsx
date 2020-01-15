import React, { useEffect, Context } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_POST_REQUEST,
  FETCH_POST_REQUEST,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE
} from "../../../reducers/post/actions";
import { store } from "../../../reducers/types";
import { Grid, Typography, Chip, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Face as FaceIcon } from "@material-ui/icons";
import Router from "next/router";
import Breadcrumb from "../../../Components/BreadCrumb";
import CustomMarkdown from "../../../Components/CustomMarkdown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "80%",
      backgroundColor: theme.palette.background.paper,
      justifyContent: "center",
      paddingLeft: "20px"
    },
    container: {
      marginBottom: "200px"
    },
    title: {
      border: "1px solid black"
    }
  })
);

const Post = () => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state: store) => state.post);
  const { isPostLoading, isPostDeleting, isPostDeleteSuccess } = useSelector(
    (state: store) => state.post.loadingStates
  );
  const { me } = useSelector((state: store) => state.user);
  const { category, title } = useRouter().query;

  useEffect(() => {
    if (isPostDeleteSuccess) {
      dispatch({
        type: DELETE_POST_FAILURE
      });
      Router.push(`/post/${category}`);
    }
  }, [isPostDeleteSuccess]);

  const _onClickNickname = nickname => () => {
    Router.push(`/profile/${nickname}`);
  };

  const _onClickDeleteButton = e => {
    e.preventDefault();
    dispatch({
      type: DELETE_POST_REQUEST,
      payload: {
        postId: currentPost._id,
        userId: me._id
      }
    });
  };

  if (isPostLoading) {
    return (
      <>
        <div>로딩중 입니다!</div>
      </>
    );
  } else if (currentPost) {
    return (
      <div className={classes.root}>
        <Breadcrumb category={category} title={title} />
        <Grid container className={classes.container}>
          <Grid item xs={6}>
            <Typography variant="h5" color="secondary">
              제목
              <Typography variant="h4" color="primary">
                {currentPost.title}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ float: "right" }}>
            <Chip
              icon={<FaceIcon />}
              onClick={_onClickNickname(currentPost.nickname)}
              label={currentPost.nickname}
            />
            {me && me.nickname === currentPost.nickname && (
              <Button
                color="secondary"
                variant="contained"
                onClick={_onClickDeleteButton}
              >
                삭제
              </Button>
            )}
            <Typography color="textSecondary">{currentPost.Date}</Typography>
          </Grid>
        </Grid>
        {currentPost && <CustomMarkdown source={currentPost.body} />}
      </div>
    );
  } else {
    return <div>포스트가 존재하지 않습니다</div>;
  }
};

Post.getInitialProps = ctx => {
  const { title, category } = ctx.query;

  ctx.store.dispatch({
    type: FETCH_POST_REQUEST,
    payload: {
      title,
      category
    }
  });
  return {};
};

export default Post;
