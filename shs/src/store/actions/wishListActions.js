export const SET_WISHLIST_ITEMS = "SET_WISHLIST_ITEMS";
export const ADD_WISHLIST_ITEM = "ADD_WISHLIST_ITEM";
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';


export const setWishListItems = (items) => ({
  type: SET_WISHLIST_ITEMS,
  payload: items,
});

export const addWishListItem = (item) => ({
  type: ADD_WISHLIST_ITEM,
  payload: item,
});

export const removeFromWishList = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
