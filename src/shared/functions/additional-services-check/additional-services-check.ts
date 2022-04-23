import {
  setFullTank,
  setBabyChair,
  setRightHandDrive,
} from '../../../redux/step-three-order-form-slice/step-three-order-form-slice';
import { useAppDispatch } from '../../custom-hooks';
import { TCheckboxItem } from '../../types';

export function additionalServicesCheck(
  activeTitle: string,
  item: TCheckboxItem,
  dispatch: ReturnType<typeof useAppDispatch>,
) {
  switch (activeTitle) {
    case 'Полный бак, 500р':
      dispatch(
        setFullTank({
          fullTank: !item.isActive,
        }),
      );
      break;
    case 'Детское кресло, 200р':
      dispatch(
        setBabyChair({
          babyChair: !item.isActive,
        }),
      );
      break;
    case 'Правый руль, 1600р':
      dispatch(
        setRightHandDrive({
          rightHandDrive: !item.isActive,
        }),
      );
      break;
  }
}
