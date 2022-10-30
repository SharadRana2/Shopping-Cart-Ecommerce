import { Nav, Footer, MoreProducts } from "../Components/index";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <section className={`${styles.heroSection} flex-row`}>
        <div className={`${styles.heroContent} flex-row`}>
          <div className={`${styles.mainText} flex-row colm`}>
            <h1 className={styles.mainHeading}>
              iPhone <br /> 14 Pro
            </h1>
            <h1 className={styles.subHeading}>Pro.Beyond.</h1>
            <Link to="/singleproduct/1">
              <button className={styles.btn}>View &#62;</button>
            </Link>
          </div>
          <div className={styles.heroImgContainer}>
            <img
              className={styles.heroImg}
              alt="home"
              src="https://res.cloudinary.com/dptiwf11q/image/upload/v1665938403/store/iphone_jhkvdb.png"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.heroSection} ${styles.promoSection}`}>
        <div className={`${styles.heroContent} flex-row colm`}>
          <div className={`${styles.PromoText} flex-row colm`}>
            <h1 className={styles.promoHeading}>
              <i class="fa-brands fa-apple"></i>
              Watch
            </h1>
            <h1 className={styles.promosubHeading}>Adventure Awaits</h1>
            <div className={styles.btnContainer}>
              <Link to="/singleproduct/10">
                <button className={styles.btn}>View &#62;</button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImgContainer}>
            <img
              className={styles.watchImg}
              alt="home"
              src="https://res.cloudinary.com/dptiwf11q/image/upload/v1666045506/store/Apple_watch_fytk6h.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.moreProducts}>
        <div className={styles.productsContainer}>
          <MoreProducts />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
