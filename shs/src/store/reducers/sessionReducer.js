import { SET_SESSION_ID } from "../actions/sessionActions";
import { setLocalStorage } from "../../components/LocalStorage/setLocalStorage";
import { getSessionNumber } from "../../components/Sessions/getSessionNumber";

const initialSessionId = getSessionNumber();

const initialState = {
  sessionId: initialSessionId,
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
