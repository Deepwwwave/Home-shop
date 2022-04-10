import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "Rodrigo",
      name: "Lopez",
      signIn: false,
    };
  }

  connect = () => {
    this.setState({
      signIn: true,
    });
  };

  disconnect = () => {
    this.setState({
      signIn: false,
    });
  };

  render() {
    return (
      <div className="container_user">
        <button
          onClick={this.state.signIn === false ? this.connect : this.disconnect}
        >
          {this.state.signIn === false ? "Connexion" : "Deconnexion"}
        </button>
        <ul className={this.state.signIn === false ? "displayNone" : "display"}>
          <li>{this.state.firstname}</li>
          <li>{this.state.name}</li>
        </ul>
      </div>
    );
  }
}
