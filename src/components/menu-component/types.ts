import { TMenuTitlesArr, TMenuIcons } from '../../shared/types';

export type TMenuComponent = {
  menuTitlesArr: TMenuTitlesArr[];
  menuIconsArr: TMenuIcons[];
  setMenuActive: (v: boolean) => void;
  windowWidth: number;
  language: string;
  setLanguage: (v: string) => void;
  isActive: boolean;
};

export type TState = {
  activeIndex: number | null;
  isHovered: boolean;
};
