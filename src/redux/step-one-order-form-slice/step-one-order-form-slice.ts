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
  },
});

export const { setCityInput, setStreetInput } = stepOneOrderForm.actions;

export default stepOneOrderForm.reducer;

export const getStepOneObj = (state: RootState) => state.stepOneOrderForm;
