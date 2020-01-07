import React from "react";
import { NextPage } from "next";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { post } from "../../reducers/post/interfaces";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    card: { maxWidth: 340 }
  });
});

const PostItem = ({ category, posts }) => {
  const classes = useStyles({});
  if (posts) {
    return (
      <div>
        {category === "dev" ? (
          <Typography>개발</Typography>
        ) : category === "hacking" ? (
          <Typography>해킹</Typography>
        ) : category === "finance" ? (
          <Typography>재태크</Typography>
        ) : (
          <Typography>비즈니스</Typography>
        )}
        {posts.map(post => {
          //@ts-ignore
          <Card className={classes.card} key={post._id}>
            <CardActionArea href={`/${category}/${post.title}`}>
              <CardContent>
                <Typography>{post.title}</Typography>
                <Typography>{post.nickname}</Typography>
                <Typography>{post.Date}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>;
        })}
      </div>
    );
  }
};
export default PostItem;
