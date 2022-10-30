import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import CartContext from "./context/cartContext";
import FilterContext from "./context/filterContext";
import WishlistContext from "./context/wishlistContext";

ReactDOM.render(
  <React.StrictMode>
    <FilterContext>
      <WishlistContext>
        <CartContext>
          <Router>
            <App />
          </Router>
        </CartContext>
      </WishlistContext>
    </FilterContext>
  </React.StrictMode>,
  document.getElementById("root")
);
