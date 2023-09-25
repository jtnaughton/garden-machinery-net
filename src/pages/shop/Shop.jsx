import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { PRODUCTS } from "./Products";
import { Product } from "./product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="container">
      <div className="navBar">
        <nav class="navbar navbar-light bg-light p-3">
          <a class="navbar-brand">
            <Link to="/">Home</Link>
          </a>
          <Link to="/basket">
            <ShoppingCart size={32} />
          </Link>
        </nav>
      </div>

      <div className="section">
        <h1 className="title pt-5">Products</h1>

        <div className="">
          <div className="productGrid">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
