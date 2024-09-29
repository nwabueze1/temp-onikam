import { CoreMenuItemFields } from '../../../models';

export type FilterCardProps = {
  layoutClass?: string;
  getCurrencySymbol: string;
  categoryItems: CoreMenuItemFields[];
  setSearchInput: React.Dispatch<
    React.SetStateAction<{
      price: number;
      search: string;
    }>
  >;
  mode: 'view' | 'edit';
};
