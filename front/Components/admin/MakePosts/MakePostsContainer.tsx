import React from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Container, Button } from "@material-ui/core";

const MakePostsContainer: NextPage = () => {
  const DynamicEditor = dynamic(() => import("./MakePostsForm"), {
    ssr: false
  });

  return (
    <div>
      <Container maxWidth="sm">
        <DynamicEditor />
      </Container>
    </div>
  );
};

export default MakePostsContainer;
