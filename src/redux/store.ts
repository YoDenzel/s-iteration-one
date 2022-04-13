import { configureStore } from '@reduxjs/toolkit';
import mapPointsReducer from './map-points-slice/map-points-slice';
import sidebarSlice from './sidebar-slice/sidebar-slice';
import stepOneOrderFormReducer from './step-one-order-form/step-one-order-form';

export const store = configureStore({
  reducer: {
    mapPoints: mapPointsReducer,
    sidebarSlide: sidebarSlice,
    stepOneOrderForm: stepOneOrderFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
