import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/context";

export const Product = (props) => {
  const { id, productBrand, productModel, productImage, price } = props.data;
  const { addToBasket, basketItems } = useContext(ShopContext)

  const basketItemAmount = basketItems[id];

  return (
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
        <button className="addToCartBttn" onClick={ () => addToBasket(id)}> Add To Cart {basketItemAmount > 0 && <>({basketItemAmount})</>}</button>
      </div>
    </div>
  );
};
