import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../pages/shop/Products";

export const ShopContext = createContext(null);

const getDefaultBasket = () => {
  let basket = {};

  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    basket[i] = 0;
  }
  return basket;
};
export const ShopContextProvider = (props) => {
  const [basketItems, setBasketItmes] = useState(getDefaultBasket());

  const addToBasket = (itemId) => {
    setBasketItmes((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromBasket = (itemId) => {
    setBasketItmes((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateBasketCount = (newAmount, itemId) => {
    setBasketItmes((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const calculateBasketSubtotal = () => {
    let basketSubtotal = 0;

    for (let itemId in basketItems) {
      let subTotal = 0;
      let itemCount = basketItems[itemId];
      if (itemCount > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === Number(itemId)
        );
        subTotal += itemCount * itemInfo.price;
        basketSubtotal += subTotal;
      }
    }
    return basketSubtotal;
  };

  const contextValue = {
    basketItems,
    addToBasket,
    removeFromBasket,
    updateBasketCount,
    calculateBasketSubtotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
