import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <>
        {this.props.heading === "h1" && <h1>{this.props.title}</h1>}
        {this.props.heading === "h2" && <h2>{this.props.title}</h2>}
        {this.props.heading === "h3" && <h3>{this.props.title}</h3>}
      </>
    );
  }
}
