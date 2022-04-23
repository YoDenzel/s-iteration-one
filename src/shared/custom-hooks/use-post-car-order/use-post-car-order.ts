import { useMutation, useQueryClient } from 'react-query';
import { fetchPostCarOrder } from '../../api';
import { TPostCarOrder } from '../../types';

const QUERY_KEY = 'carOrder';

export const usePostCarOrder = () => {
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
