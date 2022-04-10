export type TInputDatePicker = {
  title: string;
  date: Date | undefined | null;
  setDate: (v: Date | null) => void;
  minDate?: Date | null;
  isDisabled: boolean;
  clearInputClickHandler: () => void;
};
