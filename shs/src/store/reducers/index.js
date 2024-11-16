import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import dataReducer from "./dataSlice";
import cartReducer from "./cartReducer"; 
import couponReducer from "./couponReducer";
import sessionReducer from "./sessionReducer";
import customerReducer from "./customerSlice";


const rootReducer = combineReducers({
    location: locationReducer,
    data: dataReducer,
    cart: cartReducer,
    coupon: couponReducer,
    session: sessionReducer,
    customer: customerReducer, 
});

export default rootReducer;
