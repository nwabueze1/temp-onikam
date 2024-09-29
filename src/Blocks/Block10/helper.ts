import { TCategory } from './type';

export const cardType = (
  i: number,
  selectedLayout: string,
  xmd: boolean,
  lg: boolean
) => {
  if (selectedLayout === 'layout-2')
    return xmd && i === 3
      ? 'mixed'
      : i % 2
      ? 'dark'
      : xmd && i === 2
      ? 'dark'
      : 'mixed';
  if (selectedLayout === 'layout-3')
    return xmd && i === 3
      ? 'image'
      : i % 2
      ? 'dark'
      : xmd && i === 2
      ? 'dark'
      : 'image';
  if (selectedLayout === 'layout-5' && lg)
    return [1, 2, 5, 6].includes(i) ? 'image' : 'dark';
  if (selectedLayout === 'layout-5')
    return i % 2 && i > 3 ? 'dark' : i % 2 === 0 && i < 4 ? 'dark' : 'image';
  return xmd && i === 3
    ? 'none'
    : i % 2
    ? 'dark'
    : xmd && i === 2
    ? 'dark'
    : 'none';
};

export const cardsLayout = (cardArray: TCategory[], selectedLayout: string) => {
  if (selectedLayout === 'layout-3') {
    // return cardArray
    //   ?.flatMap((element: TCategory) => [element, element])
    //   ?.slice(0, 6);
    return cardArray;
  }
  if (selectedLayout === 'layout-5') {
    // return cardArray
    //   ?.flatMap((element: TCategory) => [element, element])
    //   ?.slice(0, 8);
    return cardArray;
  }

  return cardArray;
};

export const extractMenuCategories = (data: TCategory[]) => {
  return data?.map((item) => {
    return {
      uuid: item.uuid,
      title: item.title,
      description: item.description,
    };
  });
};
