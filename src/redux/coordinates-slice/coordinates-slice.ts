import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCoordinates } from '../../shared/types';

export const coordinatesSlice = createSlice({
  name: 'coordinatesSlice',
  initialState: {
    streetsCoordinates: [] as TCoordinates[],
  },
  reducers: {
    setStreetsCoordinates: (
      state,
      action: PayloadAction<{ coordinates: TCoordinates[] }>,
    ) => {
      state.streetsCoordinates = action.payload.coordinates;
    },
  },
});

export const { setStreetsCoordinates } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
