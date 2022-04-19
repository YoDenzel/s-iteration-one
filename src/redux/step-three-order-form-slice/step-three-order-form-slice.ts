import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
    setCarColor: (state, action: PayloadAction<{ carColor: string }>) => {
      state.color = action.payload.carColor;
    },
    setRentalDuration: (
      state,
      action: PayloadAction<{ rentalDuration: string }>,
    ) => {
      state.rentalDuration = action.payload.rentalDuration;
    },
    setRate: (state, action: PayloadAction<{ rate: string }>) => {
      state.rate = action.payload.rate;
    },
    setFullTank: (state, action: PayloadAction<{ fullTank: boolean }>) => {
      state.fullTank = action.payload.fullTank;
    },
    setRightHandDrive: (
      state,
      action: PayloadAction<{ rightHandDrive: boolean }>,
    ) => {
      state.rightHandDrive = action.payload.rightHandDrive;
    },
    setBabyChair: (state, action: PayloadAction<{ babyChair: boolean }>) => {
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

export const getStepThreeObj = (state: RootState) => state.stepThreeOrderForm;
