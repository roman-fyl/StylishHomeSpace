import { combineReducers } from "redux";
import locationReducer from './locationReducer';
import dataReducer from "./dataSlice";


const rootReducer = combineReducers({
    location: locationReducer,
    data: dataReducer,
})

export default rootReducer;
