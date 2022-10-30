import { featured } from "../constants/featured";
import { Link } from "react-router-dom";
import styles from "./MoreProducts.module.css";

const MoreProducts = () => {
  return featured.map((item) => {
    return (
      <div className={`${styles.promoCard} flex-row colm`}>
        <Link to={`/singleproduct/${item.id}`}>
          <img src={item.image} alt="Apple" className={styles.promoCardImg} />
          <div className={styles.overlay}>
            <div className={styles.textOverlay}>{item.name}</div>
          </div>
        </Link>
      </div>
    );
  });
};

export default MoreProducts;
