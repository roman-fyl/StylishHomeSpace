export const SET_COUPON = 'SET_COUPON';
export const CLEAR_COUPON = 'CLEAR_COUPON';

export const setCoupon = (coupon) => ({
  type: SET_COUPON,
  payload: coupon
});

export const clearCoupon = () => ({
  type: CLEAR_COUPON
});