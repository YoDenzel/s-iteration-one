export type TCheckboxComponent = {
  setCheckboxItem: (v1: checkboxArray[], v2: string) => void;
  checkboxArr: checkboxArray[];
};

type checkboxArray = { title: string; isActive: boolean };
