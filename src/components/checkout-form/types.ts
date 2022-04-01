export type TCheckoutForm = {
  firstStepObj: TFirstStepObj;
  isButtonActive: boolean;
  price: string;
  buttonTitle: string;
};

type TFirstStepObj = {
  title: string;
  information: string;
};
