import { Icons } from '../../shared/icons';
import styles from './breadcrumbs-component.module.scss';
import { TBreadcrumbsComponent } from './types';

export function BreadcrumbsComponent({
  breadcrumbsArr,
  activeComponentIndex,
  setActiveIndex,
  isButtonActive,
}: TBreadcrumbsComponent) {
  return (
    <nav className={styles.breadcrumbs_container}>
      {breadcrumbsArr.map((item, index, arr) => (
        <span key={item.title + index}>
          <button
            onClick={() => setActiveIndex(index)}
            className={styles.button_link}
            disabled={isButtonActive(index)}
            style={{
              color: activeComponentIndex === index ? '#0EC261' : '',
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
