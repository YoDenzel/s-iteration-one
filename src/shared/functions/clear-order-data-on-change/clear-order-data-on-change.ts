import { setCheckboxFalse } from '../../../redux/order-form-checkbox-arr/order-form-checkbox-arr';
import { clearDates } from '../../../redux/rent-date/rent-date';
import { clearStepThreeStore } from '../../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { clearStepTwoStore } from '../../../redux/step-two-order-form-slice/step-two-order-form-slice';
import { useAppDispatch } from '../../custom-hooks';

export const clearOrderDataOnChange = (
  activeComponentIndex: number,
  dispatch: ReturnType<typeof useAppDispatch>,
) => {
  activeComponentIndex < 1 && dispatch(clearStepTwoStore());
  dispatch(clearStepThreeStore());
  dispatch(setCheckboxFalse());
  dispatch(clearDates());
};
