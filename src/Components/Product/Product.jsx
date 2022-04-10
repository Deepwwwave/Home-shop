import React, { Component } from "react";
import Title from "../Title/Title";
import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="container_product">
        <Title heading="h3" title={this.props.name} />
        <img src={`./img/${this.props.imgName}.webp`} alt={this.props.name} />
        <p>{this.props.price} €</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
