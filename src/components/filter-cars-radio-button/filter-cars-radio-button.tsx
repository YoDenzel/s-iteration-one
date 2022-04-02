import { Icons } from '../../shared/icons';
import styles from './filter-cars-radio-button.module.scss';

type TFilterCarsRadioButton = {
  activeButtonName: string;
  setActiveButtonName: (v: string) => void;
  name: string;
  label: string;
};

export function FilterCarsRadioButton({
  activeButtonName,
  setActiveButtonName,
  name,
  label,
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
          onClick={() => setActiveButtonName(name)}
        />
      </div>
      <p className={styles.radio_button_label}>{label}</p>
    </label>
  );
}
