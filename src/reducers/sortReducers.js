// import necessary dependencies
import { SORT_PRODUCTS, RESET_SORT } from "../constants/productConstants";

// defines the initial state for the sort reducer
const initialState = {
  sortBy: null,
};

// takes in the current state and an action as parameters and returns the updated state based on the action type
const sortReducer = (state = initialState, action) => {
  switch (action.type) {

    // updates the sortBy property in the state to the payload value from the action.
    case SORT_PRODUCTS:
      return {
        ...state,
        sortBy: action.payload,
      };

    // resets the sortBy property to null.
    case RESET_SORT:
      return {
        ...state,
        sortBy: null,
      };

    // returns the current state as is
    default:
      return state;
  }
};

export default sortReducer;
