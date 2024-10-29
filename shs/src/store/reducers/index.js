import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import dataReducer from "./dataSlice";
import cartReducer from "./cartReducer"; 

const rootReducer = combineReducers({
    location: locationReducer,
    data: dataReducer,
    cart: cartReducer,
});

export default rootReducer;
