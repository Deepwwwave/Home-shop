import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      firstnemame: "firstname",
      name: "name",
      signIn: false,
    };
  }
  click(e) {
    this.setState({
      signIn: true,
    });
  }
  render() {
    return (
      <>
        <button onClick={this.click}>Connect</button>
        <ul className={(this.state.signIn = false ? displayNone : display)}>
          <li>{this.state.firstname}</li>
          <li>{this.state.name}</li>
        </ul>
      </>
    );
  }
}
