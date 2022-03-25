import { Icons } from '../../shared/icons';
import styles from './text-input.module.scss';

type TTextInput = {
  title: string;
  placeholder: string;
  inputValue: string;
  setInputValue: (v: string) => void;
};

export function TextInput({
  title,
  placeholder,
  inputValue,
  setInputValue,
}: TTextInput) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.input_name}>{title}</p>{' '}
      <div className={styles.input_container}>
        <input
          className={styles.input_bar}
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          type="button"
          className={styles.reset_button}
          onClick={() => setInputValue('')}
        >
          <Icons.ResetInputIcon />
        </button>
      </div>
    </div>
  );
}
