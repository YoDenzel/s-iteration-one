import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCarsData } from '../../shared/types';
import { RootState } from '../store';

export const stepTwoOrderForm = createSlice({
  name: 'stepTwoOrderForm',
  initialState: {
    car: {} as TCarsData,
  },
  reducers: {
    setCarItem: (state, action: PayloadAction<{ car: TCarsData }>) => {
      state.car = action.payload.car;
    },
  },
});

export const { setCarItem } = stepTwoOrderForm.actions;

export default stepTwoOrderForm.reducer;

export const getCarItem = (state: RootState) => state.stepTwoOrderForm.car;
