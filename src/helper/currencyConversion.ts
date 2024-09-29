export const getCurrency = (currency: string) => {
  let symbol = '';

  switch (currency) {
    case 'USD':
      symbol = '$';
      break;
    case 'NGN':
      symbol = 'N';
      break;
    case 'GBP':
      symbol = '£';
      break;
    default:
      symbol = '$';
      break;
  }

  return symbol;
};
