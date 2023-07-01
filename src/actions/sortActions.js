import { SORT_PRODUCTS, RESET_SORT } from "../constants/productConstants";


// Action creator to set sort criteria
export const sortProducts = (sortBy) => {
  return {
    type: SORT_PRODUCTS,
    payload: sortBy,
  };
};

// Action creator to reset sort
export const resetSort = () => {
  return {
    type: RESET_SORT,
  };
};
