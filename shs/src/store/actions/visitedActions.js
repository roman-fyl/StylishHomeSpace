export const SET_VISITED_ITEMS = "SET_VISITED_ITEMS";
export const ADD_VISITED_ITEM = "ADD_VISITED_ITEM";

export const setVisitedItems = (items) => ({
  type: SET_VISITED_ITEMS,
  payload: items,
});

export const addVisitedItem = (item) => ({
  type: ADD_VISITED_ITEM,
  payload: item,
});
