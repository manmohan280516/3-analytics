import { toast } from "react-toastify";

import {
  GET_USER_INFO_LOADING,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  GET_POST_COMMENTS_LOADING,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILED,
} from "../constants/ListingPageConstants";

export const getUserInfo =
  (userID = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_USER_INFO_LOADING });
      const url =
        userID !== ""
          ? `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
          : `https://jsonplaceholder.typicode.com/posts`;
      fetch(url)
        .then((response) => response.json())
        .then((json) =>
          dispatch({
            type: GET_USER_INFO_SUCCESS,
            payload: json,
          })
        );
    } catch (error) {
      toast.error("Error in fetching data", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: GET_USER_INFO_FAILED,
        payload: {},
      });
    }
  };

export const getPostComments = (postID) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_COMMENTS_LOADING });
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}/comments`;
    fetch(url)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_POST_COMMENTS_SUCCESS,
          payload: json,
        })
      );
  } catch (error) {
    toast.error("Error in fetching data", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: GET_POST_COMMENTS_FAILED,
      payload: {},
    });
  }
};
