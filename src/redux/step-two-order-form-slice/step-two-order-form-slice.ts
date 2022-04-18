import { createSlice } from '@reduxjs/toolkit';
import { TCarsData } from '../../shared/types';

export const stepTwoOrderForm = createSlice({
  name: 'stepTwoOrderForm',
  initialState: {
    car: {} as TCarsData,
  },
  reducers: {
    setCarItem: (state, action) => {
      state.car = action.payload.car;
    },
  },
});

export const { setCarItem } = stepTwoOrderForm.actions;

export default stepTwoOrderForm.reducer;
