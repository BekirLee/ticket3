import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(API_URL);
    // const data = await res.json();
    return res.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProducts",    
  async (newProduct) => {
    const res = await axios.post(API_URL, newProduct);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await axios.delete(`${API_URL}/${productId}`);
    return productId;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return state.filter((product) => product._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
