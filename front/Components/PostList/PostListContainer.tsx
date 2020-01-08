import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Link, Typography } from "@material-ui/core";
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
        <Grid item xs={6}>
          <Link href="/post/dev" style={{ textDecoration: "none" }}>
            <Typography variant="h2" color="primary">
              개발
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/post/hacking" style={{ textDecoration: "none" }}>
            <Typography variant="h2" color="error">
              해킹
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/post/finance" style={{ textDecoration: "none" }}>
            <Typography variant="h2">재태크</Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/post/business" style={{ textDecoration: "none" }}>
            <Typography variant="h2" color="textSecondary">
              비즈니스
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostListContainer;
