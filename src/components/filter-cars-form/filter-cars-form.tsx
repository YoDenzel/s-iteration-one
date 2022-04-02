import { radioFilterButtonsArr } from '../../shared/constants';
import { FilterCarsRadioButton } from '../filter-cars-radio-button';
import styles from './filter-cars-form.module.scss';

type TFilterCarsForm = {
  activeButtonName: string;
  setActiveButtonName: (v: string) => void;
};

export function FilterCarsForm({
  activeButtonName,
  setActiveButtonName,
}: TFilterCarsForm) {
  return (
    <form className={styles.form_wrapper}>
      {radioFilterButtonsArr.map((item, index) => (
        <FilterCarsRadioButton
          key={item.title + index}
          activeButtonName={activeButtonName}
          setActiveButtonName={setActiveButtonName}
          name={item.name}
          label={item.title}
        />
      ))}
    </form>
  );
}
