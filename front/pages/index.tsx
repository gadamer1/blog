import React from "react";
import { NextPage } from "next";

const Home: NextPage<{ msg: string }> = ({ msg }) => {
  return <div>ㅎㅇㅎㅇ{msg}</div>;
};

Home.getInitialProps = async ({ req }) => {
  const msg = "hi";
  return { msg };
};

export default Home;
