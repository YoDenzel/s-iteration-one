import { createSlice } from '@reduxjs/toolkit';

export const stepThreeOrderFormSlice = createSlice({
  name: 'stepThreeOrderForm',
  initialState: {
    color: '',
    rentalDuration: '',
    rate: '',
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
  },
  reducers: {
    setCarColor: (state, action) => {
      state.color = action.payload.carColor;
    },
    setRentalDuration: (state, action) => {
      state.rentalDuration = action.payload.rentalDuration;
    },
    setRate: (state, action) => {
      state.rate = action.payload.rate;
    },
    setFullTank: (state, action) => {
      state.fullTank = action.payload.fullTank;
    },
    setRightHandDrive: (state, action) => {
      state.rightHandDrive = action.payload.rightHandDrive;
    },
    setBabyChair: (state, action) => {
      state.babyChair = action.payload.babyChair;
    },
  },
});

export const {
  setCarColor,
  setFullTank,
  setRate,
  setRentalDuration,
  setRightHandDrive,
  setBabyChair,
} = stepThreeOrderFormSlice.actions;

export default stepThreeOrderFormSlice.reducer;
