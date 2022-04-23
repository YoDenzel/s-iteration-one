export const filterArrayOfObjects = <T>(arr: T[]) => {
  const withoutUndefined = arr.filter(item => item !== undefined);
  return [
    ...(new Map(
      withoutUndefined.map((item: T, key) => [
        item[key as unknown as keyof T],
        item,
      ]),
    ).values() as any),
    // пришлось заюзать any, так как на stackoverflow пишут, что проблема в TS-конфиге и менять там что-то не хочется
  ];
};
