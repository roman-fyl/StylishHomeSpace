import {
  SET_WISHLIST_ITEMS,
  ADD_WISHLIST_ITEM,
  REMOVE_FROM_WISHLIST,
} from "../actions/wishListActions";

import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

const initialState = {
  items: getFromLocalStorage("wishListItems") || [],
};

const wishListReducer = (state = initialState, action) => {
  console.log("Action:", action);
  console.log("State before:", state);
  switch (action.type) {
    case SET_WISHLIST_ITEMS:
      setLocalStorage("wishListItems", action.payload);
      return { ...state, items: action.payload || [] };

    case ADD_WISHLIST_ITEM:
      if (!state.items.some((item) => item.sku === action.payload.sku)) {
        const updatedItems = [...state.items, action.payload];
        setLocalStorage("wishListItems", updatedItems);
        return {
          ...state,
          items: updatedItems,
        };
      }
      return state;

    case REMOVE_FROM_WISHLIST:
      const updatedRemoveItems = state.items.filter(
        (item) => item.sku !== action.payload
      );
      setLocalStorage("wishListItems", updatedRemoveItems); // Sync with localStorage
      return { ...state, items: updatedRemoveItems };

    default:
      return state;
  }
};

export default wishListReducer;
