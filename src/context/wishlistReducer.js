export const wishlistReducer = (wishState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...wishState, wishlist : [...wishState.wishlist , { ...action.payload }] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishState,
        wishlist: wishState.wishlist.filter((c) => c.id !== action.payload.id),
      };
    default:
      return wishState;
  }
};
