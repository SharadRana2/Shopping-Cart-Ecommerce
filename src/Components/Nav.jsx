import { Link } from "react-router-dom";
import { CartState } from "../context/cartContext";
import styles from "./Nav.module.css";

function Nav() {
  const {
    state: { cart },
  } = CartState();
  return (
    <nav>
      <div className={styles.nav}>
        <div className={`flex-row ${styles.firstNav}`}>
          <img
            src="https://res.cloudinary.com/dptiwf11q/image/upload/v1665944021/store/logo_qwactk.png"
            alt=""
          />
        </div>
        <div className={`${styles.midNav} flex-row `}>
          <ul className={styles.navLinks}>
            <Link className={`${styles.linkTo} ${styles.topLinks}`} to="/">
              {" "}
              <li className="li-link">Home</li>
            </Link>
            <Link
              className={`${styles.linkTo} ${styles.topLinks}`}
              to="/product"
            >
              {" "}
              <li className="li-link">Shop Now</li>
            </Link>
          </ul>
        </div>
        <div className={`${styles.lastNav} flex-row`}>
          <ul className={styles.navConnect}>
            {/* <Link to="/user" className={styles.linkTo}> */}
            <li className="">
              <i className="fas fa-user"></i>
            </li>
            {/* </Link> */}
            <Link to="/wishlist" className={styles.linkTo}>
              <li className="">
                <i className="fas fa-heart"></i>
              </li>
            </Link>
            <Link to="/cart" className={styles.linkTo}>
              <li className="">
                <i className="fas fa-shopping-cart"></i>
              </li>
            </Link>
            {cart.length > 0 && (
              <div className={`${styles.itemNo} flex-row`}>{cart.length}</div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
