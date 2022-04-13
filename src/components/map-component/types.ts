import { TAddressesArr } from '../../shared/types';

export type TMapComponent = {
  cityTitle: string;
  center: [number, number];
  zoom: number;
  infoArr?: TAddressesArr[];
  streetTitle: string;
  clickHandler: (city: string, street?: string) => void;
};
