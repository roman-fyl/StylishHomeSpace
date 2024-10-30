import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";

export const getSessionNumber = () => {
    const currentSession = parseInt(getFromLocalStorage('abnd-session')) || 3010000;

    const newSessionNumber = currentSession + 1;

    setLocalStorage('abnd-session', newSessionNumber);

    return newSessionNumber;
};
