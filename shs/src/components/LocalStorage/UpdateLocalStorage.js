import { getFromLocalStorage } from "./getFromLocalStorage";
import {setLocalStorage} from "./setLocalStorage";

export const updateLocalStorage = (key, updatedValue) => {
    try {
        const existingData = getFromLocalStorage(key) || []; 
        const newData = [...existingData, updatedValue];
        setLocalStorage(key, newData);
    }
    catch (error) {
        console.error("Error updateLocalStorage", error);
    }
}
