
export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
        console.log(localStorage.removeItem(key));
    } catch (error) {
        console.error("Error remove data", error);
    }
}