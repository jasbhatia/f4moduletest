import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../redux/actions/constants/action-types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

// api call

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCT_SUCCESS:
      const postsWithImgSrc = action.payload.map((post) => ({
        ...post,
        imgSrc: `https://picsum.photos/200?random=${post.id}`,
      }));
      return { ...state, loading: false, data: postsWithImgSrc, error: "" };

    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
