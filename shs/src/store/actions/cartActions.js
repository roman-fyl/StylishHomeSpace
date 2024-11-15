export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export const addToCart = (product, sessionId) => ({
  type: ADD_TO_CART,
  payload: { product, sessionId },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const setCartItems = (items, sessionId) => ({
  type: SET_CART_ITEMS,
  payload: { items, sessionId },
});
