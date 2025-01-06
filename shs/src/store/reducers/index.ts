import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import dataReducer from "./dataSlice";
import cartReducer from "./cartReducer"; 
import couponReducer from "./couponReducer";
import sessionReducer from "./sessionReducer";
import customerReducer from "./customerSlice";
import contentReducer from "./contentSlice";
import visitedReducer from "./visitedReducer";
import wishListReducer from "./wishListReducer";
import laterReducer from "./laterReducer";


const rootReducer = combineReducers({
    location: locationReducer,
    data: dataReducer,
    cart: cartReducer,
    coupon: couponReducer,
    session: sessionReducer,
    customer: customerReducer, 
    content: contentReducer,
    visited: visitedReducer,
    wishList: wishListReducer,
    later: laterReducer,
});

export default rootReducer;
