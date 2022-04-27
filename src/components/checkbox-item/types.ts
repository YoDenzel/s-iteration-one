export type TCheckboxItem = {
  title: string;
  isButtonActive: boolean;
  checkboxArr: checkboxArray[];
};

type checkboxArray = { title: string; isActive: boolean; price: number };
