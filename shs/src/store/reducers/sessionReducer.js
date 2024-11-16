import { SET_SESSION_ID } from "../actions/sessionActions";
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";

const initialState = {
  sessionId: getFromLocalStorage("abnd-session") || null, 
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION_ID:
      const updatedSessionId = action.payload;
      setLocalStorage("abnd-session", updatedSessionId);
      return {
        ...state,
        sessionId: updatedSessionId,
      };

    default:
      return state;
  }
};

export default sessionReducer;
