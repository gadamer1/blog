import React from "react";
import ReactMarkdown from "react-markdown";
import Emoji from "react-emoji-render";
import CodeBlock from "./admin/MakePosts/CodeBlock";

function CustomLink(props) {
  return (
    <a href={props.href} style={{ textDecoration: "none", color: "cadetblue" }}>
      {props.children.map(({ props }) => {
        return <span key={props.nodeKey}>{props.children}</span>;
      })}
    </a>
  );
}

const CustomMarkdown = ({ source }) => {
  return (
    <div>
      <ReactMarkdown
        source={source}
        renderers={{
          code: CodeBlock,
          link: CustomLink
        }}
      />
    </div>
  );
};

export default CustomMarkdown;
