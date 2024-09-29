import {
  CoreMenuFields_menuCategories,
  CoreMenuItemFields,
} from '../../models';

export const parseMenuCategories = (
  menuCategories: CoreMenuFields_menuCategories[],
  menuItems: CoreMenuItemFields[]
) => {
  return menuCategories?.map((category) => ({
    name: category?.title as string,
    uuid: category?.uuid as string,
    numMenuItems: menuItems?.filter(
      ({ menuCategory }) => menuCategory?.uuid === category?.uuid
    )?.length as number,
  }));
};

export const sortDataByName = (
  data: CoreMenuItemFields[],
  sortBy: string,
  setFilteredData: React.Dispatch<
    React.SetStateAction<CoreMenuItemFields[] | undefined>
  >
) => {
  if (sortBy === 'Name (A - Z)' || sortBy === 'Name (Z - A)') {
    const sorted = [...data].sort((firstData, lastData) => {
      return sortBy === 'Name (A - Z)'
        ? firstData.name
            .toLowerCase()
            .localeCompare(lastData.name.toLowerCase())
        : lastData.name
            .toLowerCase()
            .localeCompare(firstData.name.toLowerCase());
    });
    setFilteredData(sorted);
    return;
  }

  if (sortBy === 'Price (Low - High)' || sortBy === 'Price (High - Low)') {
    const sorted = [...data].sort((firstData, lastData) => {
      const firstPrice = parseFloat(String(firstData?.price));
      const lastPrice = parseFloat(String(lastData?.price));
      return sortBy === 'Price (Low - High)'
        ? firstPrice - lastPrice
        : lastPrice - firstPrice;
    });
    setFilteredData(sorted);
    return;
  }

  setFilteredData(data);
};

export const findLowestAndHighestPrice = (menuItems: CoreMenuItemFields[]) => {
  let lowestPrice = Infinity;
  let highestPrice = -Infinity;

  for (const menuItem of menuItems) {
    if (menuItem.price < lowestPrice) {
      lowestPrice = menuItem.price;
    }
    if (menuItem.price > highestPrice) {
      highestPrice = menuItem.price;
    }
  }

  return { lowestPrice, highestPrice };
};

export const handleFilter = (
  query: {
    price: number;
    search: string;
  },
  setFilteredData: React.Dispatch<
    React.SetStateAction<CoreMenuItemFields[] | undefined>
  >,
  menuItems: CoreMenuItemFields[]
) => {
  const terms = query?.search?.toLowerCase().split(' ');
  const filteredResults =
    query?.search === ''
      ? menuItems
      : menuItems.filter((item) =>
          terms.every((term) => item.name.toLowerCase().includes(term))
        );

  const filteredByPrice =
    query?.price === 0
      ? filteredResults
      : filteredResults.filter((item) => item.price <= query?.price);

  setFilteredData(filteredByPrice);
  return;
};
