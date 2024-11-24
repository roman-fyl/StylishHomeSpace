import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
} from "../actions/cartActions";

const initialState = {
  items: [],
  sessionId: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        items: action.payload.items || [],
        sessionId: action.payload.sessionId,
      };

      case ADD_TO_CART: {
        const existingItemIndex = state.items.findIndex(
          (item) => item.sku === action.payload.product.sku
        );
  
        if (existingItemIndex !== -1) {
          const updatedItems = state.items.map((item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.product.quantity,
                }
              : item
          );
          return { ...state, items: updatedItems };
        } else {
          return {
            ...state,
            items: [...state.items, { ...action.payload.product }],
          };
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.idN !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
