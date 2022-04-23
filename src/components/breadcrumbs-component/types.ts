export type TBreadcrumbsComponent = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
  activeComponentIndex: number;
  setActiveIndex: (v: number) => void;
  isButtonActive: (v: number) => boolean;
};
