import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    items: [],
    sessionId: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.items.find(item => item.id === action.payload.product.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === existingItem.id
                            ? { ...item, quantity: action.payload.product.quantity } // Update the quantity
                            : item
                    ),
                    sessionId: action.payload.sessionId,
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload.product, quantity: action.payload.product.quantity || 1 }],
                sessionId: action.payload.sessionId,
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        default:
            return state;
    }
};

export default cartReducer;
