import { useMemo } from 'react';
import { createPaginationArray } from '../../functions';

type TUsePagination = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export const usePagination = ({
  currentPage,
  pageSize,
  siblingCount = 1,
  totalCount,
}: TUsePagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return createPaginationArray({ start: 1, end: totalPageCount });
    }

    const leftSiblingCount = Math.max(currentPage - siblingCount, 1);
    const rightSiblingCount = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    const shouldShowLeftDots = leftSiblingCount > 2;
    const shouldShowRightDots = rightSiblingCount < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = createPaginationArray({ start: 1, end: leftItemCount });

      return [...leftRange, 'DOTS', totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = createPaginationArray({
        start: totalPageCount - rightItemCount + 1,
        end: totalPageCount,
      });
      return [firstPageIndex, 'DOTS', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = createPaginationArray({
        start: leftSiblingCount,
        end: rightSiblingCount,
      });
      return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
