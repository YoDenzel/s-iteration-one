import { TCoordinates } from '../../shared/types';

export type TMapComponent = {
  cityTitle: string;
  center: [number, number];
  zoom: number;
  streetTitle: string;
  clickHandler: (city: string, street?: string) => void;
  cityCoordinatesArr: TCoordinates[];
  streetsCoordinatesArr: TCoordinates[];
};
