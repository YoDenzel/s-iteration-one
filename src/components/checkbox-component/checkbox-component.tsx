import { CheckboxItem } from '../checkbox-item';
import styles from './checkbox-component.module.scss';
import { TCheckboxComponent } from './types';

export function CheckboxComponent({
  checkboxArr,
  setCheckboxItem,
}: TCheckboxComponent) {
  return (
    <section className={styles.checkbox_container}>
      <h1 className={styles.checkbox_title}>Доп услуги</h1>
      {checkboxArr.map((item, index, arr) => (
        <CheckboxItem
          key={item.title + index}
          title={item.title}
          checkboxArr={arr}
          isButtonActive={item.isActive}
          setCheckboxItem={setCheckboxItem}
        />
      ))}
    </section>
  );
}
