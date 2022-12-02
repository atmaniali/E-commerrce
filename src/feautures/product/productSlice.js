import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_PRODUCT_URL;
// console.log(url)

export const fetchPosts = createAsyncThunk('posts/fetchProduct', async () => {
    try {
        const response = await axios.get(url)
        // console.log(response.data)
        return response.data
     } catch (err) {
        return err.message
    }
})


const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
      builder
          .addCase(fetchPosts.pending, (state) => {
          state.status = 'loading'
          })
          .addCase(fetchPosts.rejected, (state, action) => {
              state.status = 'refused'
              state.err = action.error.message
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
              state.status = 'succedded'
              state.products = action.payload
      })
      
  },
});

export default productSlice.reducer;
export const getAll = (state) => state.products.products;
export const getStatus = state => state.products.status;
export const getError = state => state.products.error;
export const getSingleProduct = (state,id) => state.products.products.filter(product => product.id === id)
