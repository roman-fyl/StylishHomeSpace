import { SET_COUPON, CLEAR_COUPON } from "../actions/couponActions";

const initialState = {
  code: null,
  discountAmount: 0,
  minOrderValue: 0,
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUPON:
      return {
        code: action.payload.code,
        discountAmount: action.payload.discountAmount,
        minOrderValue: action.payload.minOrderValue,
      };
    case CLEAR_COUPON:
      return initialState;
    default:
      return state;
  }
};

export default couponReducer;