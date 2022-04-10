import { createSlice } from '@reduxjs/toolkit';

export const stepTwoOrderForm = createSlice({
  name: 'stepTwoOrderForm',
  initialState: {
    carName: '',
    carColors: [],
  },
  reducers: {
    setCarName: (state, action) => {
      state.carName = action.payload.carInput;
    },
    setCarColors: (state, action) => {
      state.carColors = action.payload.carColors;
    },
  },
});

export const { setCarName, setCarColors } = stepTwoOrderForm.actions;

export default stepTwoOrderForm.reducer;
