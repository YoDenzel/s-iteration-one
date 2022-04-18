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
  clearInputHandler,
  inputClickHandler,
  referal,
  onClickLi,
}: TTextInput) {
  return (
    <div className={styles.wrapper} ref={referal}>
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
          <ul
            className={`${styles.dropdown} ${
              listItems.length > 3 ? styles.list_element_overflow : ''
            }`}
          >
            {listItems.map((item, index) => {
              return (
                <li
                  key={item + index}
                  onClick={() => {
                    onClickLi(item);
                    inputClickHandler();
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
