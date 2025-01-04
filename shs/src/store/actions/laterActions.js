export const SET_LATER_ITEMS = "SET_LATER_ITEMS";
export const ADD_LATER_ITEM = "ADD_LATER_ITEM";
export const REMOVE_FROM_LATER = 'REMOVE_FROM_LATER';


export const addLaterItem = (item) => ({
  type: "ADD_LATER_ITEM",
  payload: item,
});

export const removeLaterItem = (sku) => ({
  type: "REMOVE_FROM_LATER",
  payload: sku,
});