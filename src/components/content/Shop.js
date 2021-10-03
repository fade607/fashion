import React from "react";
import data from "../../data/data.json";
import "../../css/shop.css";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function Shop() {
  const Products = data.products;

  return (
    <div className="shop">
      {Products.map((item, index) => {
        const id = item._id;
        return (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>price: {item.price}$</p>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
