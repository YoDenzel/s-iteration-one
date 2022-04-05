import { Icons } from '../../shared/icons';
import styles from './pagination.module.scss';

type TPagination = {
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
  isPrevPage: () => boolean;
  isNextPage: () => boolean;
};

export function Pagination({
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
  isNextPage,
  isPrevPage,
}: TPagination) {
  return (
    <nav className={styles.nav_container}>
      <button
        disabled={isPrevPage()}
        className={`${styles.pagination_item} ${
          isPrevPage() && styles.unactive_button
        }`}
        onClick={() => prevPageClickhandler()}
      >
        <Icons.LeftArrow color={isPrevPage() ? '#999999' : '#000'} />
      </button>
      {paginationRange?.map((item, index) => {
        if (item === 'DOTS') {
          return (
            <span className={styles.pagination_item_dots} key={item + index}>
              &#8230;
            </span>
          );
        }

        return (
          <button
            className={`${styles.pagination_item} ${
              currentPage === Number(item) && styles.active_page
            }`}
            key={Number(item) + index}
            onClick={() => setCurrentPage(Number(item))}
          >
            {item}
          </button>
        );
      })}
      <button
        className={`${styles.pagination_item} ${
          isNextPage() && styles.unactive_button
        }`}
        onClick={() => nextPageClickhandler()}
        disabled={isNextPage()}
      >
        <Icons.RightArrow color={isNextPage() ? '#999999' : '#000'} />
      </button>
    </nav>
  );
}
