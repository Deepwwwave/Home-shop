import React, { Component } from "react";
import Product from "../Product/Product";
import "./Gallery.css";

export default class Gallery extends Component {
  state = {
    products: [
      {
        name: "ET-H",
        imgName: "image1",
        price: "150",
        id: "1",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "Ellysium-W",
        imgName: "image2",
        price: "205",
        id: "2",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "G-Custom",
        imgName: "image3",
        price: "300",
        id: "3",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "Blue-C",
        imgName: "image4",
        price: "270",
        id: "4",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "Gla-X",
        imgName: "image5",
        price: "360",
        id: "5",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
      {
        name: "Cherzam",
        imgName: "image6",
        price: "295",
        id: "6",
        description: "lorem ipsum lorem ipsum lorem ipsum",
      },
    ],
  };

  render() {
    return (
      <ul className="container_gallery">
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.name}
              imgName={product.imgName}
              price={product.price}
              key={product.id}
            >
              {product.description}
            </Product>
          );
        })}
      </ul>
    );
  }
}
