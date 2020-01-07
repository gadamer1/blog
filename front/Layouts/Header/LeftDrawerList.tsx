import React, { FunctionComponent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Link,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { Category as CategoryIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    categoryTitle: {
      flexGrow: 1,
      justifyContent: "center",
      alignContent: "center"
    }
  })
);

const categories = [
  {
    name: "개발",
    slug: "/post/dev"
  },
  {
    name: "해킹",
    slug: "/post/hacking"
  },
  {
    name: "재테크",
    slug: "/post/finance"
  },
  {
    name: "비즈니스",
    slug: "/post/business"
  }
];

const LeftDrawerList: FunctionComponent<{ toggleDrawer: Function }> = ({
  toggleDrawer
}) => {
  const classes = useStyles({});
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="../../static/images/profile.jpg"
            title="나는 이런 사람입니다"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              나는 이런 사람입니다
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Divider />
      <Typography className={classes.categoryTitle} gutterBottom>
        카테고리
      </Typography>
      <List>
        {categories.map((obj, index) => (
          <Link href={`${obj.slug}`} key={obj.name}>
            <ListItem button key={obj.name}>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default LeftDrawerList;
