import React, { FunctionComponent } from "react";
import Link from "next/link";
import { NextComponentType } from "next/types";
import Grid from "@material-ui/core/Grid";

// COMPONENTS
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item className="header" xs={12}>
        <Header />
      </Grid>
      <Grid item className="body" xs={12}>
        {children}
      </Grid>
      <Grid item className="footer" xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AppLayout;
