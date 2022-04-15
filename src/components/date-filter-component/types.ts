export type TDateFilterComponent = {
  dateFrom?: Date | null;
  setDateFrom: (v: Date | null) => void;
  dateTo?: Date | null;
  setDateTo: (v: Date | null) => void;
  minDate?: Date | null;
  clearInputClickHandler: () => void;
  firstInputTitle: string;
  secondInputTitle: string;
  maxTime?: Date;
  minTime?: Date | null;
};
