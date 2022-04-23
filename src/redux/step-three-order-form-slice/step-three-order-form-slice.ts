import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCarRateData } from '../../shared/types';
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
    rateItem: {} as TCarRateData,
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
      state.rate = action.payload.rate.substring(
        0,
        action.payload.rate.indexOf(','),
      );
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
    clearStepThreeStore: state => {
      (state.color = ''),
        (state.rentalDuration = ''),
        (state.rate = ''),
        (state.fullTank = false),
        (state.rightHandDrive = false),
        (state.babyChair = false);
    },
    setCarRateItem: (
      state,
      action: PayloadAction<{ rateItem: TCarRateData }>,
    ) => {
      state.rateItem = action.payload.rateItem;
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
  clearStepThreeStore,
  setCarRateItem,
} = stepThreeOrderFormSlice.actions;

export default stepThreeOrderFormSlice.reducer;

export const getStepThreeObj = (state: RootState) => state.stepThreeOrderForm;

export const getRateId = (state: RootState) =>
  state.stepThreeOrderForm.rateItem.id;
