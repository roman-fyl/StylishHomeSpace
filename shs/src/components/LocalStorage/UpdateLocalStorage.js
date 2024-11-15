import { getFromLocalStorage } from "./getFromLocalStorage";
import { setLocalStorage } from "./setLocalStorage";

export const updateLocalStorage = (key, updatedItem) => {
    try {
        const existingData = getFromLocalStorage(key) || [];
        
        const existingItemIndex = existingData.findIndex(item => item.sku === updatedItem.sku);
        
        if (existingItemIndex !== -1) {
            existingData[existingItemIndex].quantity = updatedItem.quantity;
        } else {
            existingData.push(updatedItem);
        }

        setLocalStorage(key, existingData);
    } catch (error) {
        console.error("Error in updateLocalStorage:", error);
    }
};
