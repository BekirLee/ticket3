import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => {
        item.id === action.payload.id;
      });
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const item = (state.items = state.items.find(
        (item) => item.id == action.payload.id
      ));

      if (item) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id == action.payload.id);
      if (item) {
        item.count -= 1;
      }
    },
  },
});

export const { addItem, increment, decrement } = basketSlice.actions;
export default basketSlice.reducer;
