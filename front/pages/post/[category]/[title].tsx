import React, { useEffect, Context } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_POST_REQUEST,
  FETCH_POST_REQUEST
} from "../../../reducers/post/actions";
import { store } from "../../../reducers/types";
import Renderer from "../../../Components/draft/Renderer";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Chip,
  Breadcrumbs
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Face as FaceIcon } from "@material-ui/icons";
import Router from "next/router";
import Breadcrumb from "../../../Components/BreadCrumb";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      justifyContent: "center",
      margin: "100px"
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
  const { currentPost } = useSelector((state: store) => state.post);
  const { isPostLoading } = useSelector(
    (state: store) => state.post.loadingStates
  );

  const { category, title } = useRouter().query;

  const _onClickNickname = nickname => () => {
    Router.push(`/profile/${nickname}`);
  };

  if (isPostLoading) {
    return (
      <>
        <div>로딩중 입니다!</div>
      </>
    );
  } else {
    return (
      <div className={classes.root}>
        <Breadcrumb category={category} title={title} />
        <Grid container className={classes.container}>
          <Grid item xs={6}>
            <Typography variant="h4">
              타이틀
              <Typography variant="h5" color="primary">
                {currentPost.title}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Chip
              icon={<FaceIcon />}
              onClick={_onClickNickname(currentPost.nickname)}
              label={currentPost.nickname}
            />
            <Typography color="textSecondary">{currentPost.Date}</Typography>
          </Grid>
        </Grid>

        {currentPost && <Renderer raw={JSON.parse(currentPost.body)} />}
      </div>
    );
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
