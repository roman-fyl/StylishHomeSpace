import { SET_VISITED_ITEMS, ADD_VISITED_ITEM } from "../actions/visitedActions";

import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import {setLocalStorage } from "../../components/LocalStorage/setLocalStorage";


const initialState = {
  items: getFromLocalStorage("visitedItems") || []
};

const visitedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISITED_ITEMS:
      setLocalStorage("visitedItems", action.payload); 
      return {
        ...state,
        items: action.payload || [],
      };

      case ADD_VISITED_ITEM:
        if (!state.items.some((item) => item.sku === action.payload.sku)) {
          const updatedItems = [...state.items, action.payload];
          setLocalStorage("visitedItems", updatedItems); 
          return {
            ...state,
            items: updatedItems, 
          };
        }
        
        return state;

    default:
      return state;
  }
  
};

export default visitedReducer;
