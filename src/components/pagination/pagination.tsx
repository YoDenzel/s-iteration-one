import { Icons } from '../../shared/icons';
import styles from './pagination.module.scss';

type TPagination = {
  currentPage: number;
  setCurrentPage: (v: number) => void;
  paginationRange: (string | number)[] | undefined;
  nextPageClickhandler: () => void;
  prevPageClickhandler: () => void;
};

export function Pagination({
  currentPage,
  nextPageClickhandler,
  paginationRange,
  prevPageClickhandler,
  setCurrentPage,
}: TPagination) {
  return (
    <nav className={styles.nav_container}>
      <button
        className={styles.pagination_item}
        onClick={() => prevPageClickhandler()}
      >
        <Icons.LeftArrow color="#000" />
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
        className={styles.pagination_item}
        onClick={() => nextPageClickhandler()}
      >
        <Icons.RightArrow color="#000" />
      </button>
    </nav>
  );
}
