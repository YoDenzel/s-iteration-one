import { configureStore } from '@reduxjs/toolkit';
import stepOneOrderFormReducer from './step-one-order-form-slice/step-one-order-form-slice';
import stepTwoOrderFormReducer from './step-two-order-form-slice/step-two-order-form-slice';
import stepThreeOrderFormReducer from './step-three-order-form-slice/step-three-order-form-slice';
import sidebarSliceReducer from './sidebar-slice/sidebar-slice';
import checkoutPriceSliceReducer from './checkout-price-slice/checkout-price-slice';
import orderConfirmationPopupStatusSlice from './order-confirmation-popup-status-slice/order-confirmation-popup-status-slice';
import coordinatesSlice from './coordinates-slice/coordinates-slice';
import orderFormCheckboxArr from './order-form-checkbox-arr/order-form-checkbox-arr';
import rentDate from './rent-date/rent-date';

export const store = configureStore({
  reducer: {
    stepOneOrderForm: stepOneOrderFormReducer,
    stepTwoOrderForm: stepTwoOrderFormReducer,
    stepThreeOrderForm: stepThreeOrderFormReducer,
    sidebarSlide: sidebarSliceReducer,
    checkoutPrice: checkoutPriceSliceReducer,
    orderConfirmationPopupStatusSlice: orderConfirmationPopupStatusSlice,
    coordinatesSlice: coordinatesSlice,
    orderFormCheckboxArr: orderFormCheckboxArr,
    rentDate: rentDate,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
