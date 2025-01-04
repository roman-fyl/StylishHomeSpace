

import { ADD_LATER_ITEM, REMOVE_FROM_LATER, SET_LATER_ITEMS } from "../actions/laterActions";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";


const initialState = {
  items: getFromLocalStorage("laterItems") || [],
};

const laterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATER_ITEMS:
      setLocalStorage("laterItems", action.payload || []);
      return { ...state, items: action.payload || [] };

      case ADD_LATER_ITEM:
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      
      case REMOVE_FROM_LATER:
        return {
          ...state,
          items: state.items.filter((item) => item.sku !== action.payload),
        };

    default:
      return state;
  }
};

export default laterReducer;
