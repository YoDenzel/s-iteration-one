import { Icons } from '../../shared/icons';
import styles from './text-input.module.scss';

type TTextInput = {
  title: string;
  placeholder: string;
  inputValue: string;
  setInputValue: (v: string) => void;
  listItems?: string[];
  isDropDownOpen?: boolean;
  setDropdownOpen?: (v: boolean) => void;
  clearInputHandler: () => void;
};

export function TextInput({
  title,
  placeholder,
  inputValue,
  setInputValue,
  listItems,
  isDropDownOpen,
  setDropdownOpen,
  clearInputHandler,
}: TTextInput) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.input_name}>{title}</p>
      <div className={styles.flexbox}>
        <div
          className={styles.input_container}
          onClick={() => setDropdownOpen && setDropdownOpen(true)}
        >
          <input
            className={styles.input_bar}
            placeholder={placeholder}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className={styles.reset_button}
            onClick={() => clearInputHandler()}
          >
            <Icons.ResetInputIcon />
          </button>
        </div>
        {inputValue.length > 0 && isDropDownOpen && listItems ? (
          <ul className={styles.dropdown}>
            {listItems.map((item, index) => {
              return (
                !(item.toLowerCase() === inputValue.toLowerCase()) && (
                  <li
                    key={item + index}
                    onClick={() => {
                      setInputValue(item);
                      setDropdownOpen && setDropdownOpen(false);
                    }}
                  >
                    {item}
                  </li>
                )
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
