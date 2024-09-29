export type CategoriesProps = {
  categories: { name: string; numMenuItems: number; uuid: string }[];
  activeCategoryUuid: string;
  setActiveCategoryUuid: (categoryUuid: string) => void;
};
