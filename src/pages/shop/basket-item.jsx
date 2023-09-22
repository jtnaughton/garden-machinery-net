import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/context";
import "./Product.css";

export const BasketItem = (props) => {

  const { basketItems, addToBasket, removeFromBasket, updateBasketCount } = useContext(ShopContext);
  const { id, productBrand, productModel, productImage, price } =
    props.data;

  const basketItemCount = basketItems[id];

  return (
    <div className="basketItem">
      <div className="card d-flex align-items-center">
        <div className="d-flex p-3">
          <p className="lead mb-0">{productBrand}</p>
        </div>
        <img className="productImage" src={productImage} />
        <div className="card-body">
          <div className="flex-column">
            <h5 className="mb-2">{productModel}</h5>
            <h5 className="text-dark">£{price}</h5>
            <div className="countHandler">
              <button onClick={() => removeFromBasket(id)}> - </button>
              <input value={basketItemCount} onChange={(e) => updateBasketCount(Number(e.target.value), id)}/>
              <button onClick={() => addToBasket(id)}> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
