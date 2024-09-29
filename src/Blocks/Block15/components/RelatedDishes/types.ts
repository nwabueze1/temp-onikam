import { CoreRelatedMenuItemFields } from '../../../../models';

export type RelatedDishesProps = {
  title: string;
  relatedMenuData: CoreRelatedMenuItemFields[] | undefined;
  mode: 'view' | 'edit';
  currency: string;
};
