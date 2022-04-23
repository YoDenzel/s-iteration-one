export const createMapCoordinatesArr = async (
  item: string,
  setArr: (v: any) => void,
  provider: any,
) => {
  const result = await provider.search({ query: item });
  setArr((state: any) => state.concat(result[0] as any));
  return result;
};
