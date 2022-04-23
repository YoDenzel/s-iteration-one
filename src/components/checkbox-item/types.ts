export type TCheckboxItem = {
  title: string;
  isButtonActive: boolean;
  setCheckboxItem?: (v1: checkboxArray[], v2: string) => void;
  checkboxArr: checkboxArray[];
};

type checkboxArray = { title: string; isActive: boolean; price: number };
