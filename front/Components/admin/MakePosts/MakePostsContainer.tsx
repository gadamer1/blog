import React from "react";
import { NextPage } from "next";

import { Container } from "@material-ui/core";
import MakePostsEditor from "./MakePostsEditor";

const MakePostsContainer: NextPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <MakePostsEditor />
      </Container>
    </div>
  );
};

export default MakePostsContainer;
