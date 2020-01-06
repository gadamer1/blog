import React from "react";
import { NextPage } from "next";
import { Link } from "@material-ui/core";

const Home: NextPage = () => {
  return <Link href="/postList">포스트들</Link>;
};

export default Home;
