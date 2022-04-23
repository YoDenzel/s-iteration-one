import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState: {
    isMenuActive: false,
  },
  reducers: {
    setMenuActive: (state, action: PayloadAction<{ menuActive: boolean }>) => {
      state.isMenuActive = action.payload.menuActive;
    },
  },
});

export const { setMenuActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
