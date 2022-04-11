export type TDateFilterComponent = {
  dateFrom: Date | undefined | null;
  setDateFrom: (v: Date | null) => void;
  dateTo: Date | undefined | null;
  setDateTo: (v: Date | null) => void;
  minDate?: Date | null;
  clearInputClickHandler: () => void;
  firstInputTitle: string;
  secondInputTitle: string;
};
