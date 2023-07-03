// import necessary dependecies
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants/productConstants";

// defines the initial state of the cart, which includes an empty array for the cart items.
const initialState = {
  cartItems: [],
};

// takes the current state and an action as input and returns the new state based on the action type
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //  handles the action of adding an item to the cart
    case ADD_TO_CART:
      const newItem = action.payload;

      // checks if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item doesn't exist in the cart, add it with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    // handles the action of removing an item from the cart.
    case REMOVE_FROM_CART:
      const productId = action.payload;
      return {
        ...state,
        // filters out the item with the specified product ID from the cart items.
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };

    // handles the action of increasing the quantity of an item in the cart
    case INCREASE_QUANTITY:
      const increasedProductId = action.payload;
      return {
        ...state,

        // finds the item with the specified product ID and increases its quantity by 1.
        cartItems: state.cartItems.map((item) =>
          item.id === increasedProductId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    // handles the action of decreasing the quantity of an item in the cart
    case DECREASE_QUANTITY:
      const decreasedProductId = action.payload;
      return {
        ...state,

        // finds the item with the specified product ID and decreases its quantity by 1.
        cartItems: state.cartItems.map((item) =>
          item.id === decreasedProductId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    
    // returns the current state if the action type doesn't match any of the cases.
    default:
      return state;
  }
};

export default cartReducer;
