export const SET_ZIP_CODE = 'SET_ZIP_CODE';
export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';

export const setZipCode = (zipCode) => ({
    type: SET_ZIP_CODE,
    payload: zipCode,
});

export const setError = (error) => ({
    type: SET_LOCATION_ERROR,
    payload: error,
  });