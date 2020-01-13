import React, { useEffect, Context } from "react";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS_REQUEST } from "../../reducers/post/actions";
import { store } from "../../reducers/types";
import {
  Link,
  Grid,
  Typography,
  Divider,
  Paper,
  Container
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Breadcrumb from "../../Components/BreadCrumb";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",

      width: 500,
      textDecoration: "none"
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  })
);

const Post = () => {
  const { posts } = useSelector((state: store) => state.post);
  const router = useRouter();
  const { category } = router.query;

  const classes = useStyles({});

  const CategoryTitle = ({ category }) => {
    switch (category) {
      case "dev": {
        return (
          <Typography variant="h2" color="primary">
            개발
          </Typography>
        );
      }
      case "hacking": {
        return (
          <Typography variant="h2" color="error">
            해킹
          </Typography>
        );
      }
      case "finance": {
        return (
          <Typography variant="h2" color="initial">
            재테크
          </Typography>
        );
      }
      case "business": {
        return (
          <Typography variant="h2" color="secondary">
            비즈니스
          </Typography>
        );
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Breadcrumb category={category} />
        <Grid container justify="center" spacing={3} className={classes.root}>
          <Grid item xs={12}>
            <CategoryTitle category={category} />
          </Grid>
          <Divider />
          {posts &&
            posts.map(post => {
              return (
                <>
                  <Link
                    href={`/post/${category}/${post.title}`}
                    key={post._id}
                    style={{ textDecoration: "none" }}
                  >
                    <Grid key={post._id} item xs={6}>
                      <Paper className={classes.paper}>
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="h6">{post.nickname}</Typography>
                        <Typography variant="inherit">{post.Date}</Typography>
                      </Paper>
                    </Grid>
                  </Link>
                </>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

Post.getInitialProps = async ctx => {
  const { category } = ctx.query;
  ctx.store.dispatch({
    type: GET_POSTS_REQUEST,
    payload: { category }
  });
};

export default Post;
