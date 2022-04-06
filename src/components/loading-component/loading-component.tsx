import styles from './loading-component.module.scss';

export function LoadingComponent() {
  return (
    <section className={styles.container}>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <div className={styles.skeleton_item} key={item}></div>
      ))}
    </section>
  );
}
