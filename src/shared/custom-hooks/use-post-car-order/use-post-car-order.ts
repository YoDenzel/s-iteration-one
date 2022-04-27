import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { fetchPostCarOrder } from '../../api';
import { TPostCarOrder, TPostCarOrderResponse } from '../../types';

const QUERY_KEY = 'carOrder';

export const usePostCarOrder = (): UseMutationResult<
  TPostCarOrderResponse,
  unknown,
  TPostCarOrder
> => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    ({
      carId,
      cityId,
      color,
      dateFrom,
      dateTo,
      isFullTank,
      isNeedChildChair,
      isRightWheel,
      price,
      rateId,
      orderStatusId,
      pointId,
    }: TPostCarOrder) =>
      fetchPostCarOrder({
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
      }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEY);
      },
    },
  );
  return mutation;
};
