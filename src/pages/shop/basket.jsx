import React, { useContext } from "react";
import { PRODUCTS } from "./Products";
import { ShopContext } from "../../context/context";
import { BasketItem } from "./basket-item";

export const Basket = () => {
  const { basketItems } = useContext(ShopContext);

  return (
    <div className="basket">
      <div>
        <h1>Your Basket Items</h1>
      </div>
      <div className="basketItems">
        {PRODUCTS.map((product) => {
          if (basketItems[product.id] !== 0) {
            return <BasketItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};
