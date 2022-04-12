import { useState } from 'react';
import { Icons } from '../../shared/icons';
import styles from './checkbox-item.module.scss';

export function CheckboxItem() {
  const [isButtonActive, setButtonActive] = useState(false);
  return (
    <article
      className={styles.checkbox_container}
      onClick={() => setButtonActive(!isButtonActive)}
    >
      <article className={styles.icon_container}>
        <span
          className={`${styles.icon_border} ${
            isButtonActive && styles.active_border_color
          }`}
        >
          <span className={styles.icon_wrapper}>
            {isButtonActive && <Icons.CheckMarkIcon />}
          </span>
        </span>
        <input type="checkbox" className={styles.checkbox_input} />
      </article>
      <p className={styles.checkbox_title}>Правый руль</p>
    </article>
  );
}
