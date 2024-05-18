import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = { id: number; title: string; prefix: string; img: string }[];

const actGetCategories = createAsyncThunk(
  //first argument is a string that defines the unique action type prefix for
  //this thunk. It helps identify actions related to fetching categories.
  "categories/actGetCategories",
  // second argument is an asynchronous function that defines
  // the logic for fetching the data
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5005/categories"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("unexpected Error");
      }
    }
  }
);

export default actGetCategories;
