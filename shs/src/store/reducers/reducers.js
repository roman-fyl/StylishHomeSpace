
import {combineReducers} from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS, USER_LOGIN, USER_LOGOUT } from '../actions/actions';


const productsReducers = (state = [], action) => {
    switch (action.type) {
        case SET_PRODUCTS:
        return action.payload;
        default:
            return state;
    }
};


const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

const userReducer = (state = null, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload;
        case USER_LOGOUT:
            return null;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducers,
    cart: cartReducer,
    user: userReducer,
})

export default rootReducer;