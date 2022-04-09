import { FilterRadioButton } from '../filter-radio-button';
import styles from './filter-radio-form.module.scss';

type TFilterCarsForm = {
  activeButtonName: string;
  clickRadioButtonHandler: (v1: string) => void;
  titleArr: string[];
};

export function FilterRadioForm({
  activeButtonName,
  clickRadioButtonHandler,
  titleArr,
}: TFilterCarsForm) {
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
