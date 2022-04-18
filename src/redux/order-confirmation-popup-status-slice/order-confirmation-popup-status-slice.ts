import { createSlice } from '@reduxjs/toolkit';

export const orderConfirmationPopupStatusSlice = createSlice({
  name: 'orderConfirmationPopupSlice',
  initialState: {
    isPopupActive: false,
  },
  reducers: {
    setPopup: (state, action) => {
      state.isPopupActive = action.payload.isPopupActive;
    },
  },
});

export const { setPopup } = orderConfirmationPopupStatusSlice.actions;

export default orderConfirmationPopupStatusSlice.reducer;
