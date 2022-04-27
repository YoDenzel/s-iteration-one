import { TPutCarOrderStatus } from '../../types';
import { requestOptions } from '../constants';

export const fetchPutCarOrder = async ({
  orderId,
  orderStatusId,
}: TPutCarOrderStatus) => {
  const request = {
    ...requestOptions,
    body: JSON.stringify({
      orderStatusId: {
        id: orderStatusId?.id,
        name: orderStatusId?.name,
      },
    }),
  };

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/order/${orderId}`,
    request,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
