import { CoreMenuFields_options_config } from '../../../../models';
import { MediaValue } from '../../../../helper';

export type CartCardTypes = {
  image: MediaValue;
  quantity: number;
  price: number;
  currency: string;
  name: string;
  uuid?: string;
  optionConfigData: CoreMenuFields_options_config[];
  cartOptions: string;
  mode: 'view' | 'edit' | undefined;
  orderQuantity: number | null;
};
