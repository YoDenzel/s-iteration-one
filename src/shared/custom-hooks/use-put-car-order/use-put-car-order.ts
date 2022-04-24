import { useQueryClient, useMutation, UseMutationResult } from 'react-query';
import { fetchPutCarOrder } from '../../api';
import { TPostCarOrderResponse, TPutCarOrderStatus } from '../../types';

const QUERY_KEY = 'carOrder';

export const usePutCarOrder = (): UseMutationResult<
  TPostCarOrderResponse,
  unknown,
  TPutCarOrderStatus
> => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({ orderId, orderStatusId }: TPutCarOrderStatus) =>
      fetchPutCarOrder({ orderId: orderId, orderStatusId: orderStatusId }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
