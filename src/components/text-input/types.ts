export type TTextInput = {
  title: string;
  placeholder: string;
  inputValue: string;
  setInputValue: (v: string) => void;
  listItems?: string[];
  isDropDownOpen?: boolean;
  setDropdownOpen?: (v: boolean) => void;
  clearInputHandler: () => void;
  inputClickHandler: () => void;
  referal: any;
};
