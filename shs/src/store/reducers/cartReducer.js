
import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions";

const initialState = {
    items: [],
    sessionId: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload.product],
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
