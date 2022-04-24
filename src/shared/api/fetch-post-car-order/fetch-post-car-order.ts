import { TPostCarOrder } from '../../types';

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
  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer 52efbe08228671240494f537f2486bc109a637b4',
      'X-Api-Factory-Application-Id': `${process.env.REACT_APP_API_KEY}`,
    },
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
    requestOptions,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data;
};
