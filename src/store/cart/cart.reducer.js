import { CART_ACTION_TYPES } from "./cart.types";

// This is the only place where the state slice is updated.
export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// In redux we need to set the initial state always
export const cartReducer = (state = CART_INITIAL_STATE, action ={}) => {
  const { type, payload } = action;

  switch (type) {
    // Updates cartItems, cartCount, cartTotal simultaneously
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload, // This includes cartItems, cartCount, cartTotal
      };

    // Updates only sidebar toggle
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    //On redux we returned always the default state
    default:
      return state
  }
};