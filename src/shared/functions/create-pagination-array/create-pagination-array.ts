type TCreatePaginationArray = {
  start: number;
  end: number;
};

export const createPaginationArray = ({
  start,
  end,
}: TCreatePaginationArray) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};
