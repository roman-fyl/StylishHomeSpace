import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";

export const getSessionNumber = () => {
    const currentSession = parseInt(getFromLocalStorage('abnd-session'));

    const sessionNumber = isNaN(currentSession) ? 3010000 : currentSession;

    setLocalStorage('abnd-session', sessionNumber);

    return sessionNumber;
};
