import { differenceInMinutes } from 'date-fns';
import {
  setPrice,
  setRentTimePrice,
} from '../../../redux/checkout-price-slice/checkout-price-slice';
import { TCalculatePriceDependOnRate } from './types';

export const calculatePriceDependOnRate = ({
  activeCarRateButtonName,
  dateFrom,
  dateTo,
  minPrice,
  dispatch,
  price,
}: TCalculatePriceDependOnRate) => {
  if (dateFrom && dateTo && price) {
    let resPrice = 0;
    switch (activeCarRateButtonName) {
      case 'Месячный, 1000 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 43800) * price;

        break;
      }
      case 'Поминутно, 10 ₽': {
        resPrice = differenceInMinutes(dateTo, dateFrom) * price;
        break;
      }
      case 'Суточный, 2500 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 1440) * price;
        break;
      }
      case 'Недельный, 15000 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 10080) * price;
        break;
      }
      case 'Недельный (Акция!), 13500 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 10080) * price;
        break;
      }
      case '3 Месяца, 51000 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 131400) * price;
        break;
      }
      case 'Годовой, 200000 ₽': {
        resPrice =
          Math.ceil(differenceInMinutes(dateTo, dateFrom) / 525600) * price;
        break;
      }
    }
    dispatch(
      setRentTimePrice({
        rentPrice: resPrice,
      }),
    );
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
    dispatch(
      setRentTimePrice({
        rentPrice: 0,
      }),
    );
  }
};
