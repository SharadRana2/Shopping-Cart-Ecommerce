import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Product, SingleProduct, Cart, Wishlist } from "./Pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;
