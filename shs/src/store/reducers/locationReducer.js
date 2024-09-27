
import {SET_ZIP_CODE, SET_LOCATION_ERROR} from "../actions/locationActions";


const initialState = {
    latitude: "",
    longitude: "",
    zipCode: "",
    error: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ZIP_CODE:
            return {
                ...state,
                zipCode: action.payload,
                error: null,
            };
            case SET_LOCATION_ERROR:
            return {
                ...state,
                error: action.payload,
            };
            default:
                return state;
    }
}

export default locationReducer;