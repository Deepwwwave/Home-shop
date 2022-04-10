import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./Panier.css";

export default class Panier extends Component {
  render() {
    return (
      <div className="container_cart">
        <FontAwesomeIcon icon={faShoppingBasket} />
        <p>{this.props.children}</p>
      </div>
    );
  }
}
