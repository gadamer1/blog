import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { store } from "../../reducers/types";
import PostList from "../../pages/postList";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });
});

const PostListContainer = () => {
  const classes = useStyles({});
  const { posts } = useSelector((state: store) => state.post);

  return (
    //@ts-ignore
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {
            //@ts-ignore
            <PostList category="dev" posts={posts && posts.dev} />
          }
        </Grid>
        <Grid item xs={12}>
          {
            //@ts-ignore
            <PostList category="hacking" posts={posts && posts.hacking} />
          }
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {
            //@ts-ignore
            <PostList category="finance" posts={posts && posts.finance} />
          }
        </Grid>
        <Grid item xs={12}>
          {
            //@ts-ignore
            <PostList category="business" posts={posts && posts.business} />
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default PostListContainer;
