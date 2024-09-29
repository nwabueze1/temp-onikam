import { getCurrency } from '../../helper';
import {
  CoreCartFields,
  CoreCartItemFields,
  CoreMenuFields_options_config,
} from '../../models';
import { calculateCartSubTotal, calculateCartItemsSumTotal } from '../../util';

export function calculateTotalCost(
  orderDetails: { text: string; total: number }[]
) {
  let totalCost = orderDetails?.[0].total;

  orderDetails?.forEach((item) => {
    totalCost -= item?.total === totalCost ? 0 : item?.total;
  });

  return totalCost.toFixed(2);
}

export const parsedData = (jsonString: string) => JSON.parse(jsonString);

export function sortOptionByType(data: CoreMenuFields_options_config[]) {
  const groupedItems: Record<string, string[]> = {};

  data?.forEach((item) => {
    const { type, name } = item;
    if (!groupedItems[type as string]) {
      groupedItems[type as string] = [];
    }
    groupedItems[type as string].push(name);
  });

  return groupedItems;
}

export function addPrices(price: number): number {
  let sum = 0;
  sum += price;
  return sum;
}

export const calculateTotalPrice = (data: CoreCartItemFields[]) => {
  let totalPrice = 0;

  data?.forEach((item) => {
    const { options, quantity } = item;
    const { priceofOneQuantity } = JSON.parse(options);
    totalPrice += priceofOneQuantity * quantity;
  });

  return totalPrice;
};

export function parseRecursiveHelper(data: string): any {
  if (typeof data !== 'string' || data === '') return data;

  try {
    const parsedData = JSON.parse(data);
    if (typeof parsedData === 'string') {
      return parseRecursiveHelper(parsedData);
    }
    return parsedData;
  } catch (error) {
    return { src: data };
  }
}
function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-us').format(value);
}
export function orderDataObject(cart: CoreCartFields | undefined) {
  const subtotal = calculateCartItemsSumTotal(cart as CoreCartFields);
  const getCartTotal = calculateCartSubTotal(cart as CoreCartFields);
  const currency = getCurrency(cart?.currency ?? '');
  const deliveryFee = cart?.guest?.address?.uuid
    ? cart?.restaurant?.bank_info?.delivery_fee ?? 0
    : 0;
  const order_type = cart?.order?.order_type ?? '';
  const is_address = order_type === 'dispatch' && Boolean(cart?.guest?.address);

  const orderDetailsData: any[] = [
    { order_no: `#${cart?.order?.uuid?.slice(0, 13) ?? ''}` },
    {
      total_number_of_dishes: `${cart?.cartItems?.length ?? 0}`,
    },
    {
      subTotal: `${currency}${formatNumber(subtotal)}`,
    },
    {
      delivery_fee: `${currency}${formatNumber(deliveryFee)}`,
    },
    {
      delivery_type:
        order_type.charAt(0).toUpperCase() + order_type.slice(1).toLowerCase(),
    },
    {
      contact_name: `${cart?.guest?.firstname ?? ''} ${
        cart?.guest?.lastname ?? ''
      }`,
    },
    { contact_phone: cart?.guest?.phone ?? '' },
  ];

  if (is_address) {
    orderDetailsData.push({
      address: cart?.guest?.address?.addressline1 ?? '',
    });
  }
  return { getCartTotal, orderDetailsData };
}
