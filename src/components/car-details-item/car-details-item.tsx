import styles from './car-details-item.module.scss';

export function CarDetailsItem({
  title,
  info,
}: {
  title: string;
  info: string;
}) {
  return (
    <article className={styles.info_block}>
      <p className={styles.info_title}>{title}</p>
      <p className={styles.info_text}>{info}</p>
    </article>
  );
}
