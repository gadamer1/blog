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
  CardContent,
  Icon
} from "@material-ui/core";
import { Category as CategoryIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    list: {
      width: 250,
      justifyItems: "center"
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
      justifyContent: "center",
      alignContent: "center",
      padding: "10px"
    }
  })
);

const categories = [
  {
    name: "개발",
    slug: "/post/dev",
    icon: "important_devices"
  },
  {
    name: "해킹",
    slug: "/post/hacking",
    icon: "change_history"
  },
  {
    name: "재테크",
    slug: "/post/finance",
    icon: "attach_money"
  },
  {
    name: "비즈니스",
    slug: "/post/business",
    icon: "business"
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
            title="gadamer1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              gadamer1
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
                <Icon>{obj.icon}</Icon>
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
