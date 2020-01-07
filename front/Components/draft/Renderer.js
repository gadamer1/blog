import React, { Component } from "react";
import { renderers } from "./renderer.config";
import redraft from "redraft";

export default class Renderer extends Component {
  renderWarning() {
    return <div>Nothing to render.</div>;
  }

  render() {
    const { raw } = this.props;
    if (!raw) {
      return this.renderWarning();
    }
    const rendered = redraft(raw, renderers);
    // redraft returns a null if there's nothing to render
    if (!rendered) {
      return this.renderWarning();
    }
    return <div>{rendered}</div>;
  }
}
