import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../types";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { dispatch }) => {
    try {
      dispatch({ type: FETCH_USER_REQUEST });
      const response = await axios.get(
        "http://localhost:5001/api/users/data/user",
        { withCredentials: true }
      );
      dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
      throw error;
    }
  }
);
