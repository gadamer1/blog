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

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000"
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b"
    }
  }
});

const Header: FunctionComponent = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <ThemeProvider theme={customTheme}>
        <AppBar position="static">
          <Toolbar>
            <LeftDrawer />
            <SearchInput />
            <Auth />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
export default Header;
