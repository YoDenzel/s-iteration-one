import { Link } from 'react-router-dom';
import { Icons } from '../../shared/icons';
import styles from './breadcrumbs-component.module.scss';

type TBreadcrumbsComponent = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
  activeComponentIndex: number;
};

export function BreadcrumbsComponent({
  breadcrumbsArr,
  activeComponentIndex,
}: TBreadcrumbsComponent) {
  return (
    <nav className={styles.breadcrumbs_container}>
      {breadcrumbsArr.map((item, index, arr) => (
        <>
          <button
            className={styles.button_link}
            key={item.title + index}
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
        </>
      ))}
    </nav>
  );
}
