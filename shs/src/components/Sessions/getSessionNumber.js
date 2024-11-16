import { getFromLocalStorage } from "../LocalStorage/getFromLocalStorage";
import { setLocalStorage } from "../LocalStorage/setLocalStorage";

export const getSessionNumber = () => {
    const currentSession = parseInt(getFromLocalStorage('abnd-session'));

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomInt(1, 100);

    const generatedSessionNumber = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}${randomNumber}`;

    const sessionNumber = isNaN(currentSession) ? generatedSessionNumber : currentSession;

    setLocalStorage('abnd-session', sessionNumber);

    return sessionNumber;
};
