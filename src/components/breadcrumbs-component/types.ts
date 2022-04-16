export type TBreadcrumbsComponent = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
  activeComponentIndex: number;
  setActiveIndex: (v: number) => void;
  checkBreadcrumbColor?: (v1: number, v2: number) => string;
  isButtonActive: (v: number) => boolean;
};
