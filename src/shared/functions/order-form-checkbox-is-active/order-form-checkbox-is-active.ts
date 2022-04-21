import { setMinMaxPrice } from '../../../redux/checkout-price-slice/checkout-price-slice';
import { setCheckboxArr } from '../../../redux/order-form-checkbox-arr/order-form-checkbox-arr';
import { additionalServicesCheck } from '../additional-services-check';
import { TOrderFormCheckboxIsActive } from './types';

export const orderFormCheckboxIsActive = ({
  activeTitle,
  checkboxArr,
  dispatch,
  price,
}: TOrderFormCheckboxIsActive) => {
  checkboxArr.map(item => {
    if (item.title === activeTitle) {
      additionalServicesCheck(activeTitle, item, dispatch);
      if (item.isActive) {
        dispatch(
          setMinMaxPrice({
            minPrice: price.minPrice - item.price,
            maxPrice: price.maxPrice,
          }),
        );
      } else {
        dispatch(
          setMinMaxPrice({
            minPrice: price.minPrice + item.price,
            maxPrice: price.maxPrice,
          }),
        );
      }
      dispatch(
        setCheckboxArr({
          activeTitle: activeTitle,
        }),
      );
      return { ...item, isActive: !item.isActive };
    } else return item;
  });
};
