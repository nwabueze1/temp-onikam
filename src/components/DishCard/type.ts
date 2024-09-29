import { ReactNode } from 'react';

export type DishCardProps = {
  children: ReactNode;
  link?: string;
  hasSearch?: boolean;
  mode: 'edit' | 'view';
  size?: 'sm' | 'md';
  classNames?: Partial<
    Record<
      'parentCard' | 'anchor' | 'cardContainer' | 'dish' | 'searchContainer',
      string
    >
  >;
};
