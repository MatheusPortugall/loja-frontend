import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    error: null,
    message: ''
  },
  reducers: {
    listProducts(state, action) {
      return { ...state, products: action.payload };
    },
    productError(state, error) {
        return { ...state, error: true, message: error };
    }
  }
});

export const { listProducts, productError } = productSlice.actions;

export default productSlice.reducer;