// import { createContext, useReducer } from 'react';
// import { createAction } from '../utils/reducer/reducer.utils';

// /* ---------------------------------------------------------
//    1) PURE HELPER FUNCTIONS (NO REACT — JUST DATA LOGIC)
//    These functions NEVER touch state. They only calculate
//    new arrays based on cart logic.
// ----------------------------------------------------------*/

// // Add item or increase quantity
// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   // Add new product with quantity 1
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// // Remove item or decrease quantity
// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // Remove entirely if it's the last quantity
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // Otherwise decrease quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// // Remove item regardless of quantity
// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };


// /* ---------------------------------------------------------
//    2) INITIAL CONTEXT SHAPE
//    Defines what components EXPECT this context to provide.
// ----------------------------------------------------------*/

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// /* ---------------------------------------------------------
//    3) REDUCER INITIAL STATE
// ----------------------------------------------------------*/

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// /* ---------------------------------------------------------
//    4) ACTION TYPES
//    Helps avoid typos and keeps reducer clean.
// ----------------------------------------------------------*/

// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
// };

// /* ---------------------------------------------------------
//    5) CART REDUCER
//    The ONLY place where state is updated.
//    Receives:
//      - state: current cart state
//      - action: { type, payload }
// ----------------------------------------------------------*/

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     // Updates cartItems, cartCount, cartTotal simultaneously
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload, // This includes cartItems, cartCount, cartTotal
//       };

//     // Updates only sidebar toggle
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };

//     default:
//       throw new Error(`Unhandled action type: ${type} in cartReducer`);
//   }
// };



// /* ---------------------------------------------------------
//    6) PROVIDER COMPONENT
//    Wraps the application and exposes the context value.
// ----------------------------------------------------------*/

// export const CartProvider = ({ children }) => {

//   /* -------------------------------------------
//      6.1 useReducer (replaces multiple useStates)
//      Destructuring state:
//      state = { isCartOpen, cartItems, cartCount, cartTotal }
//   --------------------------------------------*/

//   const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);



//   /* ---------------------------------------------------------
//      6.2 LOCAL HANDLER: Builds the payload and dispatches it
//      - Recalculates totals and count
//      - Sends data to reducer
// ----------------------------------------------------------*/

// const updateCartItemsReducer = (newCartItems) => {
    
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//         createAction(
//         CART_ACTION_TYPES.SET_CART_ITEMS,{
//             cartItems: newCartItems,
//             cartCount: newCartCount,
//             cartTotal: newCartTotal
//         })        
//     );
// };



//   /* ---------------------------------------------------------
//      6.3 HANDLERS THAT COMPONENTS WILL USE
//      They use the pure helpers → then call updateCartItemsReducer
// ----------------------------------------------------------*/

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//     updateCartItemsReducer(newCartItems);
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch(
//         createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
//     );
//   };



//   /* ---------------------------------------------------------
//      6.4 CONTEXT VALUE EXPOSED TO COMPONENTS
// ----------------------------------------------------------*/

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };



//   /* ---------------------------------------------------------
//      6.5 RETURN PROVIDER
// ----------------------------------------------------------*/

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
