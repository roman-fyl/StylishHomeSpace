
export const setLocalStorage = (key, value) => {
    try {
        const dataValue = JSON.stringify(value);
        localStorage.setItem(key, dataValue);
        // console.log(localStorage.setItem(key, dataValue));
    }
    catch (error) {
        console.error("Error setLocalStorage: ", error);
    }
}