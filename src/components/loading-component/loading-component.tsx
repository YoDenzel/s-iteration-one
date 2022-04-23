import styles from './loading-component.module.scss';

export function LoadingComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.skeleton_items_block}>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div className={styles.skeleton_item} key={item} />
        ))}
      </div>
      <div className={styles.pagination_item} />
    </section>
  );
}
