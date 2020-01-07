import React, { useEffect, Context } from "react";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useCMS, useLocalForm } from "tinacms";

const Post = ({ title, fileRelativePath }) => {
  const router = useRouter();
  // grab the instance of the CMS to access the registered git API
  let cms = useCMS();

  // add a form to the CMS; store form data in `post`
  let [post, form] = useLocalForm({
    id: fileRelativePath, // needs to be unique
    label: "Edit Post",

    // starting values for the post object
    initialValues: {
      title
    },

    // field definition
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text"
      }
    ],

    // save & commit the file when the "save" button is pressed
    onSubmit(data) {
      return cms.api.git
        .writeToDisk({
          fileRelativePath: fileRelativePath,
          content: JSON.stringify({
            title: data.title
          })
        })
        .then(() => {
          return cms.api.git.commit({
            files: [fileRelativePath],
            message: `Commit from Tina: Update ${fileRelativePath}`
          });
        });
    }
  });
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

Post.getInitialProps = ctx => {
  const { title, category } = ctx.query;
  let content = require(`../../post/${category}/${title}.json`);

  return {
    fileRelativePath: `/post/${category}/${title}.json`,
    title: content.title
  };
};

export default Post;
