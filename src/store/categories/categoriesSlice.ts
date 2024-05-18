// Import createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./thunk/actGetCategories";
// Define an interface for the categories state
interface ICategoriesState {
  records: { id: number; title: string; prefix: string; img: string }[]; // Array of category objects
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'; // String literal type for loading state
  error: string | null; 
}

// Define the initial state with specific types
const initialState: ICategoriesState = {
  records: [], // Empty array of category objects
  loading: "idle" as 'idle', // Use type assertion to ensure correct loading state type
  error: null,
};

// Create a slice named "categories" using createSlice
const categoriesSlice = createSlice({
  name: "categories", // Identify the slice in the Redux store
  initialState, // Use the defined initial state with types
  reducers: {}, // Initially empty, will hold reducers for state updates
});


// we exported the actions so after we don't import the slice and import the actions, but import all from within the slice
export { actGetCategories }
// Export the reducer function of the categoriesSlice
export default categoriesSlice.reducer;
