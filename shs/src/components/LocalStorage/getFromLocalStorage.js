
export const getFromLocalStorage = (key) => {
    try {
        const dataValue = localStorage.getItem(key);
        if (dataValue === null) return null;
        return JSON.parse(dataValue);
    }
    catch (error) {
        console.error("Error getFromLocalStorage: ", error);
        return null;
    }
}