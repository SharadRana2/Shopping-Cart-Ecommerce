import React, { useMemo } from "react";
import Filter from "../Components/Filter";
import { Card, Footer, Nav } from "../Components/index";
// import { CartState } from "../context/cartContext";
import { FilterState } from "../context/filterContext";
import styles from "./Products.module.css";
import { products } from "../constants/products";

const Product = () => {
  const result = useMemo(() => products, []);
  console.log("1", products);

  const {
    filterState: { sortBy, category },
  } = FilterState();
  const transformProducts = () => {
    console.log("Started");
    let sortedProducts = products;
    if (sortBy) {
      console.log("2", sortedProducts, products);
      sortedProducts = sortedProducts.sort((a, b) =>
        sortBy === "HIGH_TO_LOW" ? b.price - a.price : a.price - b.price
      );
    } else {
      console.log("3", result);
      // console.log(products);
    }
    return sortedProducts;
    // return products;
    // if (sortBy === "") {
    //   return products;
    // }
    // return products;
  };
  let product = transformProducts();
  console.log(sortBy);
  return (
    <div className={styles.productSection}>
      <Nav />
      <div className={`${styles.body}`}>
        <div className={styles.productSection}>
          <div className={styles.productCardContainer}>
            {product.map((item) => {
              return <Card product={item} id={item.id} key={item.id} />;
            })}
          </div>
        </div>
        <Filter className={styles.filter} />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
