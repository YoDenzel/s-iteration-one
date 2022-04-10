import { FilterRadioForm } from '../filter-radio-form';
import styles from './color-filter-form.module.scss';
import { TColorFilterForm } from './types';

export function ColorFilterForm({
  activeButtonName,
  clickRadioButtonHandler,
  titleArr,
  title,
}: TColorFilterForm) {
  return (
    <article className={styles.form_container}>
      <h1 className={styles.form_title}>{title}</h1>
      <FilterRadioForm
        activeButtonName={activeButtonName}
        clickRadioButtonHandler={clickRadioButtonHandler}
        titleArr={titleArr}
      />
    </article>
  );
}
