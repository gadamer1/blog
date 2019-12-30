import React, { FunctionComponent } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Menu from "./Menu";

const Header: FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
