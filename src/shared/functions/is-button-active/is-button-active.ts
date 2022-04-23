import { TFirstStepObj, TStepThree } from '../../types';

type TIsButtonActive = {
  activeIndex: number;
  firstStep: TFirstStepObj;
  secondStep: TFirstStepObj;
  stepThree: TStepThree;
};

export function isButtonActive({
  activeIndex,
  firstStep,
  secondStep,
  stepThree,
}: TIsButtonActive) {
  switch (activeIndex) {
    case 0: {
      if (firstStep.information) return false;
      else return true;
    }
    case 1: {
      if (secondStep.information) return false;
      else return true;
    }
    case 2: {
      if (stepThree.color && stepThree.rentalDuration && stepThree.rate)
        return false;
      else return true;
    }
    default:
      return false;
  }
}
