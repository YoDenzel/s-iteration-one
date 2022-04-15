import { Icons } from '../../shared/icons';
import styles from './breadcrumbs-component.module.scss';
import { TBreadcrumbsComponent } from './types';

export function BreadcrumbsComponent({
  breadcrumbsArr,
  activeComponentIndex,
}: TBreadcrumbsComponent) {
  return (
    <nav className={styles.breadcrumbs_wrapper}>
      <article className={styles.breadcrumbs_container}>
        {breadcrumbsArr.map((item, index, arr) => (
          <span key={item.title + index}>
            <button
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
      </article>
    </nav>
  );
}
