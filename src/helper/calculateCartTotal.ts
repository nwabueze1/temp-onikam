import { CoreCartItemFields } from '../models';

export const calculateTotalPrice = (data: CoreCartItemFields[]) => {
  let totalPrice = 0;

  data.forEach((item) => {
    const { options, quantity } = item;
    const priceofOneQuantity = JSON.parse(options)?.priceofOneQuantity ?? 0;
    totalPrice += priceofOneQuantity * Number(quantity);
  });

  return totalPrice;
};
