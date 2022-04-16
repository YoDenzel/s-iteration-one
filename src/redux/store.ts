import { configureStore } from '@reduxjs/toolkit';
import mapPointsReducer from './map-points-slice/map-points-slice';
import stepOneOrderFormReducer from './step-one-order-form-slice/step-one-order-form-slice';
import stepTwoOrderFormReducer from './step-two-order-form-slice/step-two-order-form-slice';
import stepThreeOrderFormReducer from './step-three-order-form-slice/step-three-order-form-slice';
import sidebarSliceReducer from './sidebar-slice/sidebar-slice';
import checkoutPriceSliceReducer from './checkout-price-slice/checkout-price-slice';

export const store = configureStore({
  reducer: {
    mapPoints: mapPointsReducer,
    stepOneOrderForm: stepOneOrderFormReducer,
    stepTwoOrderForm: stepTwoOrderFormReducer,
    stepThreeOrderForm: stepThreeOrderFormReducer,
    sidebarSlide: sidebarSliceReducer,
    checkoutPrice: checkoutPriceSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
