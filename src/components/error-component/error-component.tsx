import styles from './error-component.module.scss';

export function ErrorComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.error_header}>Ошибка</h1>
      <p className={styles.error_text}>Подождите или перезагрузите страницу</p>
    </section>
  );
}
