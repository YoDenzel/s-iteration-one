import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const stepOneOrderForm = createSlice({
  name: 'stepOneOrderForm',
  initialState: {
    inputCity: '',
    inputStreet: '',
  },
  reducers: {
    setCityInput: (state, action: PayloadAction<{ cityInput: string }>) => {
      state.inputCity = action.payload.cityInput;
    },
    setStreetInput: (state, action: PayloadAction<{ streetInput: string }>) => {
      state.inputStreet = action.payload.streetInput;
    },
    clearStepOneOrderStore: state => {
      (state.inputCity = ''), (state.inputStreet = '');
    },
  },
});

export const { setCityInput, setStreetInput, clearStepOneOrderStore } =
  stepOneOrderForm.actions;

export default stepOneOrderForm.reducer;

export const getStepOneObj = (state: RootState) => state.stepOneOrderForm;

export const getCityInput = (state: RootState) =>
  state.stepOneOrderForm.inputCity;

export const getStreetInput = (state: RootState) =>
  state.stepOneOrderForm.inputStreet;
