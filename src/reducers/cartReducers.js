import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants/productConstants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
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
    case REMOVE_FROM_CART:
      const productId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };
    case INCREASE_QUANTITY:
      const increasedProductId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === increasedProductId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      const decreasedProductId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === decreasedProductId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
