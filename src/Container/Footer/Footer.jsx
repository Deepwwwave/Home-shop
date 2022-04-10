import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container_footer">
        <a href="#">{this.props.children}</a>
      </div>
    );
  }
}
