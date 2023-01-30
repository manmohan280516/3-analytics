import {
  GET_USER_INFO_LOADING,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  GET_POST_COMMENTS_LOADING,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILED,
} from "../constants/ListingPageConstants";

export const getUserInfoReducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case GET_USER_INFO_LOADING:
      return { loading: true, userData: [] };
    case GET_USER_INFO_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
      };
    case GET_USER_INFO_FAILED:
      return { loading: false, userData: [], error: action.payload };
    default:
      return state;
  }
};

export const getPostCommentsReducer = (
  state = { postCommentsData: [] },
  action
) => {
  switch (action.type) {
    case GET_POST_COMMENTS_LOADING:
      return { loading: true, postCommentsData: [] };
    case GET_POST_COMMENTS_SUCCESS:
      return {
        loading: false,
        postCommentsData: action.payload,
      };
    case GET_POST_COMMENTS_FAILED:
      return { loading: false, postCommentsData: [], error: action.payload };
    default:
      return state;
  }
};
