import React from "react";
import redraft, { createStylesRenderer, createBlockRenderer } from "redraft";

const styleMap = {
  BOLD: {
    fontWeight: "bold"
  },
  ITALIC: {
    fontStyle: "italic"
  },
  UNDERLINE: {
    textDecoration: "underline"
  }
};

// This is a wrapper callback for the inline styles
// the style object contains all the relevant styles from the styleMap
// it needs a key as redraft returns arrays not Components
const InlineWrapper = ({ children, style, key }) => (
  <span key={key} style={style}>
    {children}
  </span>
);
// this Component results in a flatter output as it can have multiple styles (also possibly less semantic)

// Api aligned w draft-js, aliasedElements are not required as draft-js uses them for parsing pasted html
const blockRenderMap = {
  unstyled: {
    element: "div"
  },
  blockquote: {
    element: "blockquote"
  },
  "ordered-list-item": {
    element: "li",
    wrapper: "ol"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: "ul"
  }
};

export const renderers = {
  // note the styles key and createStylesRenderer helper
  styles: createStylesRenderer(InlineWrapper, styleMap),
  blocks: createBlockRenderer(React.createElement, blockRenderMap)
};
