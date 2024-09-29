import { PayDataTypes, PaymentMethod } from './types';

export function calculateTotalCost(
  orderDetails: { text: string; cost: number }[]
) {
  let totalCost = orderDetails?.[0].cost;

  orderDetails.forEach((item) => {
    totalCost += item?.cost === totalCost ? 0 : item?.cost;
  });

  return totalCost.toFixed(2);
}

export const getSubtotalData = (
  type: string,
  payData: PayDataTypes | undefined
) => {
  const orderDetails = [
    {
      text: type === 'checkout' ? 'Subtotal' : '',
      cost: Number(payData?.subTotal) ?? 0,
    },
    {
      text: type === 'checkout' ? 'Shipping' : '',
      cost: Number(payData?.delivery_fee) ?? 0,
    },
  ];
  return orderDetails;
};

export const removeUnderScore = (text: string) =>
  text.replace(/(\s*)_(\s*)/g, ' ');

export const selectedMethod = (data: PaymentMethod[], radioButton: string) => {
  return data?.filter((item) => item?.type === radioButton)[0];
};

export const getPaymentTypeImage = (type: string) => {
  let image_url = '';

  switch (type.toLowerCase()) {
    case 'cash_on_delivery':
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/cash+payment.svg';
      break;
    case 'bank_transfer':
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/bank+payment.svg';
      break;
    case 'paystack':
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/paystack+payment.svg';
      break;
    case 'paypal':
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/paypal+payment.svg';
      break;
    case 'stripe':
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/stripe+payment.svg';
      break;
    default:
      image_url =
        'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/bank+payment.svg';
      break;
  }

  return image_url;
};
