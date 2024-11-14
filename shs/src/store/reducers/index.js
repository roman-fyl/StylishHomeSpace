import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import dataReducer from "./dataSlice";
import cartReducer from "./cartReducer"; 
import couponReducer from "./couponReducer";


const rootReducer = combineReducers({
    location: locationReducer,
    data: dataReducer,
    cart: cartReducer,
    coupon: couponReducer,
});

export default rootReducer;
