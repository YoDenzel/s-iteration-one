import { TFirstStepObj } from '../../types';

type TIsButtonActive = {
  activeIndex: number;
  firstStep: TFirstStepObj;
};

export function isButtonActive({ activeIndex, firstStep }: TIsButtonActive) {
  switch (activeIndex) {
    case 1: {
      if (firstStep.information.length > 7) return true;
    }
  }
}
