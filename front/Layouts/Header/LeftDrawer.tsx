import React, { FunctionComponent, useCallback, useState } from "react";
import { Button, Drawer, MenuItem, List, IconButton } from "@material-ui/core";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import LeftDrawerList from "./LeftDrawerList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    }
  })
);

const LeftDrawer: FunctionComponent = () => {
  const classes = useStyles({});
  const [leftSide, setLeftSide] = useState(false);

  const toggleDrawer = (isOpen: boolean) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftSide(isOpen);
  };

  const _onClickMenuButton = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={leftSide} onClose={toggleDrawer(false)}>
        <LeftDrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default LeftDrawer;
