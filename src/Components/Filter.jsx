import React from "react";
// import { useCategory } from "../../services/category_api";
import styles from "./Filter.module.css";
import { categories } from "../constants/categories";
import { FilterState } from "../context/filterContext";

const Filter = () => {
  const {
    filterState: { sortBy, category },
    filterDispatch,
  } = FilterState();
  // const { category } = useCategory();
  // console.log(sortBy, category);
  return (
    <div className={styles.sideBar}>
      <div className={styles.filterControl}>
        <p className="">Filters</p>
        <button
          className={`${styles.btn} hoverState`}
          onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
        >
          Clear All
        </button>
      </div>
      <hr className={styles.hrLine} />
      {/* <!------------Price-filter-------------> */}
      <div className={styles.priceFilter}>
        <p className={styles.subText}>SORT</p>
        <label className={styles.radioList}>
          Price : Low to high
          <span className={styles.radio}>
            {" "}
            <input
              type="radio"
              name="radio"
              onChange={() =>
                filterDispatch({ type: "SORT_PRICE", payload: "LOW_TO_HIGH" })
              }
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
            />
          </span>
        </label>
        <label className={styles.radioList}>
          Price : High to Low
          <span className={styles.radio}>
            <input
              type="radio"
              onChange={() =>
                filterDispatch({ type: "SORT_PRICE", payload: "HIGH_TO_LOW" })
              }
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
              name="radio"
            />
          </span>
        </label>
      </div>
      <hr className="side-hr" />
      {/* <!------------category-filter-------------> */}
      <div className="category-filter">
        <p className={styles.subText}>CATEGORIES</p>
        {categories.map((item) => {
          return (
            <label className={styles.radioList} key={item.id}>
              {item.categoryName}
              <span className={styles.radio}>
                <input
                  type="checkbox"
                  //   checked={
                  //     filterState?.categories &&
                  //     filterState?.categories.includes(item.categoryName)
                  //   }
                  //   onChange={() =>
                  //     filterFunc({
                  //       type: "SORT_CATEGORY",
                  //       payload: item.categoryName,
                  //     })
                  //   }
                />
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
