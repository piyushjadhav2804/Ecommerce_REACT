// import necessary dependencies
import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT,
} from "../constants/productConstants";

// defines the initial state of the product-related data
const initialState = {
  loading: false,
  products: [],
  error: null,
};

// takes the current state and an action as input and returns the new state based on the action type
const productReducer = (state = initialState, action) => {
  switch (action.type) {

    // handle the request actions
    case FETCH_PRODUCTS_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST:
    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    // handles the successful retrieval of products
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };

    // handles the successful deletion of a product
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    // handles the successful update of a product
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    // handles the successful addition of a new product
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };

    // handle the failure scenarios
    case FETCH_PRODUCTS_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case UPDATE_PRODUCT_FAILURE:
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // handles the action of adding a product without requesting it from the server
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    // returns the current state if the action type doesn't match any of the cases.
    default:
      return state;
  }
};

export default productReducer;
