import { LegacyRef } from 'react';

export type TTextInput = {
  title: string;
  placeholder: string;
  inputValue: string;
  setInputValue: (v: string) => void;
  listItems?: string[];
  isDropDownOpen?: boolean;
  clearInputHandler: () => void;
  inputClickHandler: () => void;
  referal: LegacyRef<HTMLDivElement> | undefined;
  onClickLi: (v: string) => void;
};
