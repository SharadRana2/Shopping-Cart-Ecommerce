import React, { createContext, useReducer, useContext } from "react";
import { products } from "../constants/products";
import { cartReducer } from "./cartReducer";

const Cart = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  console.log(products);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default CartContext;

export const CartState = () => {
  return useContext(Cart);
};
