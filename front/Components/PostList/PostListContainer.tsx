import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Link } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { store } from "../../reducers/types";
import PostList from "../../pages/postList";

const useStyles = makeStyles(theme => {
  createStyles({
    root: {
      flexGrow: 1
    }
  });
});

const PostListContainer = () => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container spacing={3}>
        <Link href="/post/dev">개발</Link>
        <Link href="/post/hacking">해킹</Link>
        <Link href="/post/finance">재태크</Link>
        <Link href="/post/business">비즈니스</Link>
      </Grid>
    </div>
  );
};

export default PostListContainer;
