import { useState } from 'react';
import { usePagination } from '../../shared/custom-hooks/use-pagination';

export function Pagination() {
  const [currentPage] = useState(7);
  const paginationRange = usePagination({
    currentPage: currentPage,
    pageSize: 6,
    totalCount: 84,
    siblingCount: 1,
  });

  return (
    <nav>
      {paginationRange?.map((item, index) => {
        if (item === 'DOTS') {
          return <p key={item + index}>&#8230;</p>;
        }

        return <p key={Number(item) + index}>{item}</p>;
      })}
    </nav>
  );
}
