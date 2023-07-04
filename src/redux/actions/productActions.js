import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  SET_PRODUCTS,
  SELECTED_PRODUCTS,
} from "./constants/action-types";
import axios from "axios";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductError = (err) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: err,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductError(error.message));
      });
  };
};
