import React, { FunctionComponent } from "react";
import { Button } from "@material-ui/core";

const Menu: FunctionComponent = () => {
  const _onClickMenuButton = e => {
    console.log(e);
  };

  return (
    <div>
      <Button onClick={_onClickMenuButton}>게시글</Button>
    </div>
  );
};

export default Menu;
