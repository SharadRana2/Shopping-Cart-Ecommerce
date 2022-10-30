export const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "SORT_PRICE":
      return {
        ...filterState,
        sortBy: action.payload,
      };
    case "SORT_CATEGORY":
      return {
        ...filterState,
        categories: filterState.categories.includes(action.payload)
          ? filterState.categories.filter((item) => item !== action.payload)
          : [...filterState.categories, action.payload],
      };
    case "CLEAR_ALL":
      return {
        sortBy: "",
        categories: [],
      };
    default:
      return filterState;
  }
};

// function sortedPriceList(sortBy, cardData) {
//   if (sortBy === "HIGH_TO_LOW") {
//     return [...cardData].sort((a, b) => b["price"] - a["price"]);
//   }
//   if (sortBy === "LOW_TO_HIGH") {
//     return [...cardData].sort((a, b) => a["price"] - b["price"]);
//   }
//   return cardData;
// }

// function sortedCategoryList(categories, cardData) {
//   let updatedList = [...cardData].filter((item) =>
//     categories.includes(item.category)
//   );
//   return updatedList;
// }

// function sortedBrandsList(brands, cardData) {
//   let updatedList = [...cardData].filter((item) => brands.includes(item.brand));
//   console.log({ updatedList });
//   return updatedList;
// }

// function sortedStockList(stock, cardData) {
//   let updatedList;
//   if (stock) {
//     updatedList = cardData;
//   } else {
//     updatedList = cardData.filter((item) => item.inStock === true);
//   }
//   return updatedList;
// }

// function sortedRatingList(rate, cardData) {
//   let updatedList = cardData.filter(
//     (item) => Number(item.rating) >= Number(rate)
//   );
//   return updatedList;
// }
// export {
//   filterReducer,
//   sortedPriceList,
//   sortedCategoryList,
//   sortedBrandsList,
//   sortedStockList,
//   sortedRatingList,
// };
