import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TSetMinMaxPrice } from './types';

export const checkoutPrice = createSlice({
  name: 'checkoutPrice',
  initialState: {
    minPrice: 8000,
    maxPrice: 12000,
    price: 'от 8000 до 12000 ₽',
    rentTimePrice: 0,
  },
  reducers: {
    setPrice: (state, action: PayloadAction<{ price: string }>) => {
      state.price = action.payload.price;
    },
    setMinMaxPrice: (state, action: PayloadAction<TSetMinMaxPrice>) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setDefaultPrice: state => {
      state.price = 'от 8000 до 12000 ₽';
    },
    setRentTimePrice: (state, action: PayloadAction<{ rentPrice: number }>) => {
      state.rentTimePrice = action.payload.rentPrice;
    },
  },
});

export const { setPrice, setMinMaxPrice, setDefaultPrice, setRentTimePrice } =
  checkoutPrice.actions;

export default checkoutPrice.reducer;

export const getCheckoutPrice = (state: RootState) => state.checkoutPrice.price;
