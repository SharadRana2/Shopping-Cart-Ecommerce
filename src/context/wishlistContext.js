import React, { createContext, useReducer, useContext } from "react";
import { wishlistReducer } from "./wishlistReducer";

const Wishlist = createContext();

const WishlistContext = ({ children }) => {
  const [wishState, wishDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });

  return (
    <Wishlist.Provider value={{ wishState, wishDispatch }}>
      {children}
    </Wishlist.Provider>
  );
};

export default WishlistContext;

export const WishlistState = () => {
  return useContext(Wishlist);
};
