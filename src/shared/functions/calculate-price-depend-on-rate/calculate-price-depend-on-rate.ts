import { differenceInHours, differenceInMinutes } from 'date-fns';
import { setPrice } from '../../../redux/checkout-price-slice/checkout-price-slice';
import { TCalculatePriceDependOnRate } from './types';

export const calculatePriceDependOnRate = ({
  activeCarRateButtonName,
  dateFrom,
  dateTo,
  minPrice,
  dispatch,
}: TCalculatePriceDependOnRate) => {
  if (activeCarRateButtonName === 'Поминутно, 7₽/мин' && dateFrom && dateTo) {
    const resPrice = differenceInMinutes(dateTo, dateFrom) * 7;
    dispatch(
      setPrice({
        price: `${resPrice + minPrice} ₽`,
      }),
    );
  } else if (
    activeCarRateButtonName === 'На сутки, 1999 ₽/сутки' &&
    dateFrom &&
    dateTo
  ) {
    const resPrice = Math.ceil(differenceInHours(dateTo, dateFrom) / 24) * 1999;
    dispatch(
      setPrice({
        price: `${resPrice + minPrice} ₽`,
      }),
    );
  } else {
    dispatch(
      setPrice({
        price: `${minPrice} ₽`,
      }),
    );
  }
};
