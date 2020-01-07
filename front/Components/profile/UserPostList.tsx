import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import { NextPage } from "next";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { user } from "../../reducers/user/interfaces";
import { post } from "../../reducers/post/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

const UserPostList: NextPage<{ postList: post[] }> = ({ postList }) => {
  const classes = useStyles({});

  return (
    <List className={classes.root}>
      {postList.map(post => {
        return (
          <>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {post.category}
                    </Typography>
                    {post.Date}
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        );
      })}
    </List>
  );
};

export default UserPostList;
