import { SORT_PRODUCTS, RESET_SORT } from "../constants/productConstants";

const initialState = {
  sortBy: null,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS:
      return {
        ...state,
        sortBy: action.payload,
      };

    case RESET_SORT:
      return {
        ...state,
        sortBy: null,
      };

    default:
      return state;
  }
};

export default sortReducer;
