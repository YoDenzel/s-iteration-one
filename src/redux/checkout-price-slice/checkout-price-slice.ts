import { createSlice } from '@reduxjs/toolkit';

export const checkoutPrice = createSlice({
  name: 'checkoutPrice',
  initialState: {
    minPrice: 8000,
    maxPrice: 12000,
    price: 'от 8000 до 12000 ₽',
  },
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload.price;
    },
    setMinMaxPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
  },
});

export const { setPrice, setMinMaxPrice } = checkoutPrice.actions;

export default checkoutPrice.reducer;
