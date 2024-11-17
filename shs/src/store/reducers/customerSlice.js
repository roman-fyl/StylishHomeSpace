import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage } from "../../components/LocalStorage/getFromLocalStorage";
import {setLocalStorage} from "../../components/LocalStorage/setLocalStorage";

const initialState = {
    customer: Array.isArray(getFromLocalStorage('customerData'))
      ? getFromLocalStorage('customerData')
      : [],
  };
  
  const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
      addCustomer: (state, action) => {
        state.customer = Array.isArray(action.payload)
          ? action.payload
          : [action.payload];
        setLocalStorage('customerData', state.customer);
      },
      updateCustomer: (state, action) => {
        if (state.customer && Array.isArray(state.customer)) {
          const index = state.customer.findIndex(c => c.id === action.payload.id);
          if (index !== -1) {
            state.customer[index] = action.payload;
          } else {
            state.customer.push(action.payload);
          }
          setLocalStorage('customerData', state.customer);
        } else {
          state.customer = [action.payload];
          setLocalStorage('customerData', state.customer);
        }
      },
      removeCustomer: (state) => {
        state.customer = [];
        setLocalStorage('customerData', []);
      },
    },
  });
  
  export const { addCustomer, updateCustomer, removeCustomer } = customerSlice.actions;
  
  export default customerSlice.reducer;