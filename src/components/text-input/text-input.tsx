import { Icons } from '../../shared/icons';
import { TTextInput } from './types';
import styles from './text-input.module.scss';

export function TextInput({
  title,
  placeholder,
  inputValue,
  setInputValue,
  listItems,
  isDropDownOpen,
  setDropdownOpen,
  clearInputHandler,
  inputClickHandler,
}: TTextInput) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.input_name}>{title}</p>
      <div className={styles.flexbox}>
        <div className={styles.input_container}>
          <input
            className={styles.input_bar}
            placeholder={placeholder}
            value={inputValue}
            onClick={() => inputClickHandler()}
            onChange={e => setInputValue(e.target.value)}
            maxLength={17}
          />
          <button
            type="button"
            className={styles.reset_button}
            onClick={() => clearInputHandler()}
          >
            <Icons.ResetInputIcon />
          </button>
        </div>
        {isDropDownOpen && listItems && (
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
        )}
      </div>
    </div>
  );
}
