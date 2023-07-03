// These action creators are used to create actions that will be dispatched to the Redux store. 

// import necessary dependecies
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants/productConstants";

// action creator that returns an action object to add a product to the cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// action creator that returns an action object to remove a product from the cart
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

// action creator that returns an action object to increase the quantity of a product in the cart
export const increaseQuantity = (productId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId,
  };
};

// action creator that returns an action object to decrease the quantity of a product in the cart
export const decreaseQuantity = (productId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: productId,
  };
};
