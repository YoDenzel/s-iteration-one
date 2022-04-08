import { TCarsData } from '../../shared/types';

export type TCarsList = {
  data?: TCarsData[];
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
  clickHandler: (v: string) => void;
  carName: string;
};
