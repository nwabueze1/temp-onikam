import { CoreMenuItemFields } from '../../models';

export type BlogCategoriesTypes = {
  activeCategory?: ActiveCategoryProps;
  handleActive: (
    type: string,
    name: string,
    id: string,
    description?: string
  ) => void;
  categories: CategoryProps[];
  setFilteredData: React.Dispatch<
    React.SetStateAction<CoreMenuItemFields[] | undefined>
  >;
};

export type ActiveCategoryProps = {
  name: string;
  id: string;
};

export type CategoryProps = {
  type?: string;
  name: string;
  id: string;
  quantity?: number;
  description?: string;
};
