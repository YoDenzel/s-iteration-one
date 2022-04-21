import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const rentDate = createSlice({
  name: 'rentDate',
  initialState: {
    dateFrom: '',
    dateTo: '',
  },
  reducers: {
    setDateFromRedux: (state, action: PayloadAction<{ dateFrom: string }>) => {
      state.dateFrom = action.payload.dateFrom;
    },
    setDateToRedux: (state, action: PayloadAction<{ dateTo: string }>) => {
      state.dateTo = action.payload.dateTo;
    },
    clearDates: state => {
      state.dateFrom = '';
      state.dateTo = '';
    },
  },
});

export const { setDateFromRedux, setDateToRedux, clearDates } =
  rentDate.actions;

export default rentDate.reducer;
