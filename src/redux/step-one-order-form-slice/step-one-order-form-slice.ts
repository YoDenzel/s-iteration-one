import { createSlice } from '@reduxjs/toolkit';

export const stepOneOrderForm = createSlice({
  name: 'stepOneOrderForm',
  initialState: {
    inputCity: '',
    inputStreet: '',
  },
  reducers: {
    setCityInput: (state, action) => {
      state.inputCity = action.payload.cityInput;
    },
    setStreetInput: (state, action) => {
      state.inputStreet = action.payload.streetInput;
    },
  },
});

export const { setCityInput, setStreetInput } = stepOneOrderForm.actions;

export default stepOneOrderForm.reducer;
