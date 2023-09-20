import React from "react";
import "./Product.css";

export const Product = (props) => {
  const { id, productBrand, productModel, productImage, price } = props.data;

  return (
    <div class="card d-flex align-items-center">
      <div class="d-flex p-3">
        <p class="lead mb-0">{productBrand}</p>
      </div>
      <img className="productImage" src={productImage} />
      <div class="card-body">
        <div class="flex-column">
          <h5 class="mb-2">{productModel}</h5>
          <h5 class="text-dark">£{price}</h5>
        </div>
        <button className="addToCartBttn"> Add To Cart</button>
      </div>
    </div>
  );
};
