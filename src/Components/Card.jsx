import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { CartState } from "../context/cartContext";
import { WishlistState } from "../context/wishlistContext";

const Card = ({ product, id }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const {
    wishState: { wishlist },
    wishDispatch,
  } = WishlistState();
  return (
    <div className={`${styles.card} flex-row colm`} id={id}>
      <Link to={`/singleproduct/${product.id}`}>
        <img src={product.image} className={styles.img} alt="iPhone" />
      </Link>
      <div className={`${styles.cardBody} flex-row colm`}>
        <h4 className={styles.productTitle}>{product.name}</h4>
        <span className={`${styles.subDetail} flex-row colm`}>
          {product.subtext}
          <br />
          <span className="">₹ {product.price}</span>
        </span>

        <div className={`${styles.cardFooter} flex-row`}>
          {cart.some((p) => p.id === product.id) ? (
            <button
              className={`${styles.btn} ${styles.removeCart} hoverState`}
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              className={`${styles.btn} hoverState`}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to Cart
            </button>
          )}

          {wishlist.some((p) => p.id === product.id) ? (
            <div className={`${styles.wishlist} hoverState`}>
              <i
                className="fa-solid fa-heart fa-2x"
                onClick={() =>
                  wishDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: product,
                  })
                }
              ></i>
            </div>
          ) : (
            <div className={`${styles.wishlist} hoverState`}>
              <i
                className="far fa-heart card-icon fa-2x"
                onClick={() =>
                  wishDispatch({ type: "ADD_TO_WISHLIST", payload: product })
                }
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
