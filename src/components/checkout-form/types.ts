import { TFirstStepObj } from '../../shared/types';

export type TCheckoutForm = {
  firstStepObj: TFirstStepObj;
  isButtonActive?: boolean;
  price: string;
  buttonTitle: string;
  clickHandler: () => void;
  secondStepObj: TFirstStepObj;
  thirdStepObj: TFirstStepObj[];
  isOrderStatusPage: boolean;
};
