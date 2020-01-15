import React, { FunctionComponent } from "react";
import Link from "next/link";
import {
  Theme,
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import LeftDrawer from "./LeftDrawer";
import SearchInput from "./SearchInput";
import Auth from "./Auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);



const Header: FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      
        <AppBar position="static">
          <Toolbar>
            <LeftDrawer />
            <SearchInput />
            <Auth />
          </Toolbar>
        </AppBar>
    </div>
  );
};
export default Header;
