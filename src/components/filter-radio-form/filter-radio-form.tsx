import { FilterRadioButton } from '../filter-radio-button';
import styles from './filter-radio-form.module.scss';
import { TFilterRadioForm } from './types';

export function FilterRadioForm({
  activeButtonName,
  clickRadioButtonHandler,
  titleArr,
}: TFilterRadioForm) {
  return (
    <form className={styles.form_wrapper}>
      {titleArr.map((item, index) => (
        <FilterRadioButton
          key={item + index}
          activeButtonName={activeButtonName}
          clickRadioButtonHandler={clickRadioButtonHandler}
          name={item}
        />
      ))}
    </form>
  );
}
