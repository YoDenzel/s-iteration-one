import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebarSlice',
  initialState: {
    isMenuActive: false,
  },
  reducers: {
    setMenuActive: (state, action) => {
      state.isMenuActive = action.payload.menuActive;
    },
  },
});

export const { setMenuActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
