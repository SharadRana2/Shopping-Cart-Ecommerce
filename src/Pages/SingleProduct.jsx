import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import styles from "./SingleProduct.module.css";
import { Nav, Footer } from "../Components/index";
import { CartState } from "../context/cartContext";

const SingleProduct = () => {
  const [index, setindex] = useState(0);
  const { id } = useParams();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const filtered = products.filter((item) => {
    return item.id == id;
  });
  const SingleProduct = filtered[0];
  return (
    <div className={styles.container}>
      <Nav />
      <section className={styles.content}>
        <div className={styles.leftContent}>
          <div
            className={`${styles.arrow} ${styles.Left} hoverState`}
            onClick={() => {
              index === 0 ? setindex(1) : setindex(0);
            }}
          >
            <i class="fa-solid fa-arrow-left fa-2x"></i>
          </div>
          <img
            src={SingleProduct.cover[index]}
            alt="Img"
            className={styles.coverImg}
          />
          <div
            className={`${styles.arrow} hoverState`}
            onClick={() => {
              index === 0 ? setindex(1) : setindex(0);
            }}
          >
            <i class="fa-sharp fa-solid fa-arrow-right fa-2x"></i>
          </div>
        </div>
        <div className={styles.rightContent}>
          <section className={`${styles.details} flex-row colm`}>
            <div className={styles.productTitle}>{SingleProduct.name}</div>
            <div className={`${styles.productDetails}`}>
              {SingleProduct.description}
            </div>
            <div className={styles.specGrid}>
              {SingleProduct.specs.map((item) => {
                return (
                  <div className={`${styles.specification} flex-row`}>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className={styles.descriptionFooter}>
              <div className={styles.price}> ₹ {SingleProduct.price}</div>
              {cart.some((p) => p.id == SingleProduct.id) ? (
                <button
                  className={`${styles.btn} ${styles.addedCart} hoverState`}
                >
                  Added
                  <i class="fa-solid fa-check"></i>
                </button>
              ) : (
                <button
                  className={`${styles.btn} hoverState`}
                  onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: SingleProduct });
                  }}
                >
                  Add to Cart{" "}
                </button>
              )}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SingleProduct;
