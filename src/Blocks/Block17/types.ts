export type BlogCategoriesTypes = {
  activeCategory: {
    name: string;
    uuid: string;
  };
  handleActive: (type: string, name: string, uuid: string) => void;
  categories: {
    type?: string;
    name: string;
    uuid: string;
  }[];
};

export type DisplayDropdownListProps = {
  dropDownList: { name: string; uuid: string }[];
  handleOptionSelect: (type: string, item: string, uuid: string) => void;
  type: string;
};
