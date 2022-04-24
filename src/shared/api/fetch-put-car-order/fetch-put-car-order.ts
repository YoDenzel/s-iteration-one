import { TPutCarOrderStatus } from '../../types';

export const fetchPutCarOrder = async ({
  orderId,
  orderStatusId,
}: TPutCarOrderStatus) => {
  const requestOptions = {
    method: 'PUT',
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
    }),
  };

  const response = await fetch(
    `https://api-factory.simbirsoft1.com/api/db/order/${orderId}`,
    requestOptions,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = response.json();
  return data;
};
