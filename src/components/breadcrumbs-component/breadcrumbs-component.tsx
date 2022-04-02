import { Icons } from '../../shared/icons';
import styles from './breadcrumbs-component.module.scss';

type TBreadcrumbsComponent = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
  activeComponentIndex: number;
  setActiveIndex: (v: number) => void;
};

export function BreadcrumbsComponent({
  breadcrumbsArr,
  activeComponentIndex,
  setActiveIndex,
}: TBreadcrumbsComponent) {
  return (
    <nav className={styles.breadcrumbs_container}>
      {breadcrumbsArr.map((item, index, arr) => (
        <span key={item.title + index}>
          <button
            onClick={() => setActiveIndex(index)}
            className={styles.button_link}
            disabled={!(activeComponentIndex >= index)}
            style={{
              color: `${
                !(activeComponentIndex >= index) ? '#999999' : '#0EC261'
              }`,
              cursor: `${
                !(activeComponentIndex >= index) ? 'default' : 'pointer'
              }`,
            }}
          >
            {item.title}
          </button>
          {!(arr.length - 1 === index) && (
            <span className={styles.arrow_icon}>
              <Icons.BreadcrumbsArrowIcon />
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
