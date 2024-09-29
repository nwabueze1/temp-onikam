import { MediaValue } from '../../helper';

export type FeatureCardProps = {
  rating: number;
  dish: MediaValue;
  price: number;
  dishName: string;
  favorite?: boolean;
  hasSearch?: boolean;
  link?: string;
  currency?: string;
  hasStar?: boolean;
  hasFavorite?: boolean;
  mode: 'edit' | 'view';
  className?: string;
  screenSize?: number;
};
