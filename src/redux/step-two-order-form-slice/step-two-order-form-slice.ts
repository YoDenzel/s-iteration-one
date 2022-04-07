import { createSlice } from '@reduxjs/toolkit';

export const stepTwoOrderForm = createSlice({
  name: 'stepTwoOrderForm',
  initialState: {
    carName: '',
  },
  reducers: {
    setCarName: (state, action) => {
      state.carName = action.payload.carInput;
    },
  },
});

export const { setCarName } = stepTwoOrderForm.actions;

export default stepTwoOrderForm.reducer;
