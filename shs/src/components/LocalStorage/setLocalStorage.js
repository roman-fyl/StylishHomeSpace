export const setLocalStorage = (key, value) => {
    try {
      const dataToSave = Array.isArray(value) ? value : [value];
      localStorage.setItem(key, JSON.stringify(dataToSave));
    } catch (error) {
      console.error("Error setting to localStorage: ", error);
    }
  };