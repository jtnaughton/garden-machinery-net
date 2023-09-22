import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/context";
import { PRODUCTS } from "./Products";
import { BasketItem } from "./basket-item";
import "./basket.css";

export const Basket = () => {
  const { basketItems, calculateBasketSubtotal } = useContext(ShopContext);

  const subTotal = calculateBasketSubtotal();

  return (
    <div className="basket container">
      {subTotal > 0 ? (
        <div>
          <h1>Your Basket Items</h1>
        </div>
      ) : (
        <h1>Your Basket is empty</h1>
      )}
      <div className="basketItem">
        {PRODUCTS.map((product) => {
          if (basketItems[product.id] !== 0) {
            return <BasketItem data={product} />;
          }
        })}
      </div>

      <div className="checkout">
        <p> Subtotal: £{subTotal}</p>
        <button>
          <Link to="/shop">Continue Shopping</Link>
        </button>
        <button> Checkout </button>
      </div>
    </div>
  );
};
