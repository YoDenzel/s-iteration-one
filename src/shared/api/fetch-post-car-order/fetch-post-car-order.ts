import { TPostCarOrder } from '../../types';
import { requestOptions } from '../constants';

export const fetchPostCarOrder = async ({
  carId,
  cityId,
  color,
  dateFrom,
  dateTo,
  isFullTank,
  isNeedChildChair,
  isRightWheel,
  orderStatusId,
  pointId,
  price,
  rateId,
}: TPostCarOrder) => {
  const request = {
    ...requestOptions,
    method: 'POST',
    body: JSON.stringify({
      orderStatusId: {
        id: orderStatusId?.id,
        name: orderStatusId?.name,
      },
      cityId: {
        name: cityId.name,
        id: cityId.id,
      },
      pointId: pointId,
      carId: carId,
      color: color,
      dateFrom: dateFrom,
      dateTo: dateTo,
      rateId: rateId,
      price: price,
      isFullTank: isFullTank,
      isNeedChildChair: isNeedChildChair,
      isRightWheel: isRightWheel,
    }),
  };

  const response = await fetch(
    'https://api-factory.simbirsoft1.com/api/db/order',
    request,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
