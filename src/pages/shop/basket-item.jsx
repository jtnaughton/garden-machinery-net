import React from "react";
import "./Product.css";

export const BasketItem = (props) => {
  const { id, productBrand, productModel, productImage, price } =
    props.data;

  return (
    <div className="backetItem">
      <div className="card d-flex align-items-center">
        <div className="d-flex p-3">
          <p className="lead mb-0">{productBrand}</p>
        </div>
        <img className="productImage" src={productImage} />
        <div className="card-body">
          <div className="flex-column">
            <h5 className="mb-2">{productModel}</h5>
            <h5 className="text-dark">£{price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
