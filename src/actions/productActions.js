import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
} from "../constants/productConstants";

// Action creator to fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsRequest());

    // Perform the API call to fetch the products
    const response = await fetch(
      "https://my-json-server.typicode.com/piyushjadhav2804/Ecom_database/products"
    );
    const data = await response.json();

    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

// ACTION CREATORS to delete product
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    // Perform the API call to delete the product
    await fetch(
      `https://my-json-server.typicode.com/piyushjadhav2804/Ecom_database/products/${productId}`,
      {
        method: "DELETE",
      }
    );

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};

// ACTION CREATORS to update product
export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    // Perform the API call to update the product
    await fetch(
      `https://my-json-server.typicode.com/piyushjadhav2804/Ecom_database/products/${product.id}`,
      {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
  }
};

// ACTION CREATORS to add a new product
export const addProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PRODUCT_REQUEST });

    // Perform the API call to add the product
    const response = await fetch(
      "https://my-json-server.typicode.com/piyushjadhav2804/Ecom_database/products",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
  }
};

export const addProductSuccess = (product) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
  };
};
