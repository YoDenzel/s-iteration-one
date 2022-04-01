import { useAppSelector } from '../../custom-hooks';
import { TFirstStepObj } from '../../types';

type TIsButtonActive = {
  activeIndex: number;
  firstStep: TFirstStepObj;
};

export function isButtonActive({ activeIndex, firstStep }: TIsButtonActive) {
  switch (activeIndex) {
    case 0: {
      if (firstStep.information.length > 10) return false;
      else return true;
    }
  }
}
