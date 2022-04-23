import { LegacyRef } from 'react';

export type TOrderConfirmationPopup = {
  popupRef?: LegacyRef<HTMLDivElement>;
  clickHandler: () => void;
};
