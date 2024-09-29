import { calculateSumOfOption } from '../Blocks/Block15/components/OptionConfigCards/helpers';
import { CoreCartItemFields } from '../models';

export const calculateCartItemSumTotal = (item: CoreCartItemFields) => {
  return (
    (item.menuItem.price + calculateSumOfOption(JSON.parse(item.options))) *
    item.quantity
  );
};
