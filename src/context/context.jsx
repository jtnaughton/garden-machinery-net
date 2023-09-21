import React from "react";
import { createContext, useEffect, useState } from "react";
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

  console.log(basketItems)
  
  const contextValue = {basketItems, addToBasket, removeFromBasket}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
