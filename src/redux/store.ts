import { configureStore } from '@reduxjs/toolkit';
import mapPointsReducer from './map-points-slice/map-points-slice';
import stepOneOrderFormReducer from './step-one-order-form-slice/step-one-order-form-slice';
import stepTwoOrderFormReducer from './step-two-order-form-slice/step-two-order-form-slice';
import sidebarSliceReducer from './sidebar-slice/sidebar-slice';

export const store = configureStore({
  reducer: {
    mapPoints: mapPointsReducer,
    stepOneOrderForm: stepOneOrderFormReducer,
    stepTwoOrderForm: stepTwoOrderFormReducer,
    sidebarSlide: sidebarSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
