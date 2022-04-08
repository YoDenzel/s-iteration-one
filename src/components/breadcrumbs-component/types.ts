export type TBreadcrumbsComponent = {
  breadcrumbsArr: Array<{
    title: string;
    linkTo: string;
  }>;
  activeComponentIndex: number;
};
