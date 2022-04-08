import styles from './change-language-button.module.scss';
import { TChangeLanguageButton } from './types';

export function ChangeLanguageButton({
  language,
  setLanguage,
}: TChangeLanguageButton) {
  return (
    <button
      className={styles.language_button}
      onClick={() =>
        language === 'Eng' ? setLanguage('Рус') : setLanguage('Eng')
      }
    >
      {language}
    </button>
  );
}
