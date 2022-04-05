import { FilterCarsRadioButton } from '../filter-cars-radio-button';
import { radioFilterButtonsArr } from './constants';
import styles from './filter-cars-form.module.scss';

type TFilterCarsForm = {
  activeButtonName: string;
  clickRadioButtonHandler: (v1: string, v2: string) => void;
};

export function FilterCarsForm({
  activeButtonName,
  clickRadioButtonHandler,
}: TFilterCarsForm) {
  return (
    <form className={styles.form_wrapper}>
      {radioFilterButtonsArr.map((item, index) => (
        <FilterCarsRadioButton
          key={item.title + index}
          activeButtonName={activeButtonName}
          name={item.name}
          label={item.title}
          clickRadioButtonHandler={clickRadioButtonHandler}
          filter={item.filter}
        />
      ))}
    </form>
  );
}
