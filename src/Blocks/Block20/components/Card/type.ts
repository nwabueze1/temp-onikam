import { MediaValue } from "../../../../helper";

export type DishCardProps = {
  image: MediaValue;
  name?: string;
  role?: string;
  type?: 'circular' | 'regular';
  mode: 'view' | 'edit';
};
