import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TCityObj } from './types';

export const stepOneOrderForm = createSlice({
  name: 'stepOneOrderForm',
  initialState: {
    inputCity: '',
    inputStreet: '',
    cityIdObj: {} as TCityObj,
    pointId: '',
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
    setCityObj: (state, action: PayloadAction<{ cityIdObj: TCityObj }>) => {
      state.cityIdObj = action.payload.cityIdObj;
    },
    setPointId: (state, action: PayloadAction<{ pointId: string }>) => {
      state.pointId = action.payload.pointId;
    },
  },
});

export const {
  setCityInput,
  setStreetInput,
  clearStepOneOrderStore,
  setCityObj,
  setPointId,
} = stepOneOrderForm.actions;

export default stepOneOrderForm.reducer;

export const getStepOneObj = (state: RootState) => state.stepOneOrderForm;

export const getCityInput = (state: RootState) =>
  state.stepOneOrderForm.inputCity;

export const getStreetInput = (state: RootState) =>
  state.stepOneOrderForm.inputStreet;

export const getCityObj = (state: RootState) =>
  state.stepOneOrderForm.cityIdObj;

export const getPointId = (state: RootState) => state.stepOneOrderForm.pointId;
