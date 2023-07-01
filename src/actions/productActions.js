import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS} from '../constants/productConstants';

// Action creator to fetch products
export const fetchProducts = () => {

    return (dispatch) => {
        dispatch(fetchProductsRequest());
        fetch("https://my-json-server.typicode.com/piyushjadhav2804/Ecom_database/products")
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchProductsSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchProductsFailure(error.message));
            });
    }
}

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