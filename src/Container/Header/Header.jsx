import React, { Component } from "react";
import Title from "../../Components/Title/Title";
import User from "../../Components/User/User";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="container_header">
        <Title heading="h1" title="Watch for men" />
        <User />
      </div>
    );
  }
}
