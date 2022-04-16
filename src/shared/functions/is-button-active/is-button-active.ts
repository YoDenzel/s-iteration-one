import { TFirstStepObj } from '../../types';

type TIsButtonActive = {
  activeIndex: number;
  firstStep: TFirstStepObj;
  secondStep: TFirstStepObj;
};

export function isButtonActive({
  activeIndex,
  firstStep,
  secondStep,
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
    default:
      return true;
  }
}
