import { useQuery, UseQueryResult } from 'react-query';
import { fetchData } from '../../api';

const STALE_TIME = 0;

type TUseGetData = {
  QUERY_KEY: string;
  url: string;
};

export const useGetData = <T>({
  QUERY_KEY,
  url,
}: TUseGetData): UseQueryResult<T> => {
  const query = useQuery([QUERY_KEY, url], () => fetchData(url), {
    staleTime: STALE_TIME,
    retry: 0,
  });
  return query;
};
