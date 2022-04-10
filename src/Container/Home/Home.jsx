import React, { Component } from "react";
import Gallery from "../../Components/Gallery/Gallery";
import Panier from "../../Components/Panier/Panier";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container_home">
        <Panier />
        <Gallery />
      </div>
    );
  }
}
