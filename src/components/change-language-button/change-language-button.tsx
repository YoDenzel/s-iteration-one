import styles from './change-language-button.module.scss';

type TChangeLanguageButton = {
  language: string;
  setLanguage: (v: string) => void;
};

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
