import { Icons } from '../../shared/icons';
import styles from './filter-radio-button.module.scss';
import { TFilterCarsRadioButton } from './types';

export function FilterRadioButton({
  activeButtonName,
  name,
  clickRadioButtonHandler,
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
          onClick={() => clickRadioButtonHandler(name)}
        />
      </div>
      <p className={styles.radio_button_label}>{name}</p>
    </label>
  );
}
