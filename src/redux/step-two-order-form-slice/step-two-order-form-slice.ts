import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCarsData } from '../../shared/types';
import { RootState } from '../store';
import { TCarFilter } from './types';

export const stepTwoOrderForm = createSlice({
  name: 'stepTwoOrderForm',
  initialState: {
    car: {} as TCarsData,
    carFilter: '',
    carFilterButtonTitle: 'Все модели',
  },
  reducers: {
    setCarItem: (state, action: PayloadAction<{ car: TCarsData }>) => {
      state.car = action.payload.car;
    },
    clearStepTwoStore: state => {
      state.car = {} as TCarsData;
      state.carFilter = '';
    },
    setCarFilter: (state, action: PayloadAction<TCarFilter>) => {
      state.carFilter = action.payload.carFilter;
      state.carFilterButtonTitle = action.payload.carFilterButtonTitle;
    },
  },
});

export const { setCarItem, clearStepTwoStore, setCarFilter } =
  stepTwoOrderForm.actions;

export default stepTwoOrderForm.reducer;

export const getCarItem = (state: RootState) => state.stepTwoOrderForm.car;
