import React from "react";
import { Link } from "react-router-dom";
import { Card, Footer, Nav } from "../Components/index";
import styles from "./Wishlist.module.css";
import { WishlistState } from "../context/wishlistContext";
const Wishlist = () => {
  const {
    wishState: { wishlist },
  } = WishlistState();
  return (
    <div className={styles.container}>
      <Nav />
      {wishlist.length > 0 ? (
        <div className={styles.productcontainer}>
          {wishlist.map((item) => (
            <Card product={item} id={item.id} />
          ))}
        </div>
      ) : (
        <div className={`${styles.empty} `}>
          <div className={`${styles.modal} `}>
            <img
              className={styles.shoppingImg}
              src="https://res.cloudinary.com/dptiwf11q/image/upload/v1666563509/store/shopping_2_g8yifl.png"
              alt="Shopping Cart"
            />
            <h2>No Items in WishList !</h2>
            <Link className={styles.link} to="/product">
              <button className={`${styles.btn} hoverState`}>Shop Now!</button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Wishlist;
