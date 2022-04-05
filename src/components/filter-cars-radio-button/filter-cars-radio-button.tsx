import { Icons } from '../../shared/icons';
import styles from './filter-cars-radio-button.module.scss';

type TFilterCarsRadioButton = {
  activeButtonName: string;
  name: string;
  label: string;
  clickRadioButtonHandler: (v1: string, v2: string) => void;
  filter: string;
};

export function FilterCarsRadioButton({
  activeButtonName,
  name,
  label,
  clickRadioButtonHandler,
  filter,
}: TFilterCarsRadioButton) {
  return (
    <label className={styles.radio_button_container}>
      <div className={styles.radio_icon_block}>
        {activeButtonName === name ? (
          <Icons.RadioButtonActive />
        ) : (
          <Icons.RadioButtonInactive />
        )}
        <input
          type="radio"
          className={styles.radio_icon}
          onClick={() => clickRadioButtonHandler(name, filter)}
        />
      </div>
      <p className={styles.radio_button_label}>{label}</p>
    </label>
  );
}
