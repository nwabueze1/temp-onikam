import { CoreCartFields } from "../models";
import { calculateCartItemSumTotal } from "./calculateCartItemSumTotal";

export const calculateCartItemsSumTotal = (cart: CoreCartFields): number => {
  return cart?.cartItems?.reduce((sum, item) => sum + calculateCartItemSumTotal(item), 0) ?? 0;
};

export const calculateOptionsTotal = (options: any[], quantity: number) => {
  if (!options || options.length === 0) return 0;
  let additions: any = options.filter((option) => option.type !== "deselection").map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  let subtractions: any = options.filter((option) => option.type === "deselection").map((option) => option.selectedChoices.map((choice: any) => Number(choice.amount)));
  additions = [].concat.apply([], additions);
  subtractions = [].concat.apply([], subtractions);
  additions = additions.reduce((sum: number, num: number) => sum + num, 0);
  subtractions = subtractions.reduce((sum: number, num: number) => sum - num, 0);
  return quantity * (additions + subtractions);
};

export const calculateCartSubTotal = (cart: CoreCartFields, uuid?: string) => {
  let cartItems = [...(cart?.cartItems ?? [])];

  if (uuid) cartItems = cartItems.filter((item) => item.uuid === uuid);

  let subTotal = 0;
  cartItems.forEach((item) => {
    const itemTotal = Number(item?.quantity) * item?.menuItem?.price;
    subTotal += itemTotal;
    if (item.options) {
      const optionsTotal = calculateOptionsTotal(JSON.parse(item.options) as any[], Number(item?.quantity));
      subTotal += optionsTotal;
    }
  });
  return subTotal;
};
