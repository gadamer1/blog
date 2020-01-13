import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";

const Breadcrumb = props => {
  const { title, category } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        home
      </Link>
      {category && (
        <Link color="inherit" href={`/post/${category}`}>
          {category}
        </Link>
      )}
      {title && (
        <Link color="inherit" href={`/post/${category}/${title}`}>
          {title}
        </Link>
      )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
