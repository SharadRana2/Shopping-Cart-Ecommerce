import styles from "./CartCard.module.css";
import { CartState } from "../context/cartContext";
import { WishlistState } from "../context/wishlistContext";
const CartCard = ({ product }) => {
  const { dispatch } = CartState();
  const { wishDispatch } = WishlistState();
  return (
    <div className={`${styles.container} flex-row  `}>
      <img src={product.image} alt="Img" />
      <div className={styles.details}>
        <div className={styles.itemTitle}>{product.name}</div>
        <div> ₹ {product.price}</div>
        <button
          className={styles.btn}
          onClick={(e) => {
            wishDispatch({
              type: "ADD_TO_WISHLIST",
              payload: product,
            });
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
          }}
        >
          Move to wishlist
        </button>
      </div>
      <div className={styles.itemNo}>
        <input
          id="qty"
          name="Quantity"
          type="number"
          min="1"
          max="5"
          placeholder="1"
          onChange={(e) => {
            dispatch({
              type: "CHANGE_QTY",
              payload: { id: product.id, qty: parseInt(e.target.value) },
            });
          }}
        />
      </div>
      <div
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}
        className={`${styles.removeItm} hoverState`}
      >
        <i class="fa-solid fa-trash fa-2x"></i>
      </div>
    </div>
  );
};

export default CartCard;
