import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { additionalServicesCheck } from '../../shared/functions';
import { setMinMaxPrice } from '../checkout-price-slice/checkout-price-slice';
import { TOrderFormCheckbox } from './types';

export const orderFormCheckboxArr = createSlice({
  name: 'orderFormCheckboxArr',
  initialState: {
    checkboxArr: [
      {
        title: 'Полный бак, 500р',
        isActive: false,
        price: 500,
      },
      {
        title: 'Детское кресло, 200р',
        isActive: false,
        price: 200,
      },
      {
        title: 'Правый руль, 1600р',
        isActive: false,
        price: 1600,
      },
    ],
  },
  reducers: {
    setCheckboxArr: (state, action: PayloadAction<TOrderFormCheckbox>) => {
      state.checkboxArr = state.checkboxArr.map(item => {
        if (item.title === action.payload.activeTitle) {
          return { ...item, isActive: !item.isActive };
        } else return item;
      });
    },
    setCheckboxFalse: (state) => {
        state.checkboxArr = state.checkboxArr.map(item => {
            return {...item, isActive: false}
        })
    }
  },
});

export const { setCheckboxArr, setCheckboxFalse } = orderFormCheckboxArr.actions;

export default orderFormCheckboxArr.reducer;
