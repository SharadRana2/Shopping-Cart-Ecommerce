import React from "react";
import styles from "./Cart.module.css";
import { CartState } from "../context/cartContext";
import { Nav, CartCard } from "../Components/index";

const Cart = () => {
  const {
    state: { cart },
  } = CartState();

  const totalPrice = cart.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);
  return (
    <div className={`${styles.container}`}>
      <Nav />
      <div className={styles.content}>
        {cart.length > 0 ? (
          <section className={styles.cartItems}>
            {cart.map((item) => {
              return <CartCard product={item} />;
            })}
          </section>
        ) : (
          <div className={`${styles.cartItems} ${styles.noItem}`}>
            Sorry! No Items in Cart
          </div>
        )}
        <section className={styles.payment}>
          <h1>Summary</h1>
          <h2>Total Price: ₹ {totalPrice}</h2>
          <button className="hoverState">Proceed to Chekout</button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
