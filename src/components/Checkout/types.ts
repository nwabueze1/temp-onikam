export type CheckoutProps = {
  goBack?: () => void;
  backButtonName: string;
  mode: 'view' | 'edit';
  total: number;
  onPaymentSuccessful?: () => void;
};

export type CheckoutDataProps = {
  delivery_fee: number;
  subTotal?: number;
};

export type SingleCheckoutTypes =
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'country'
  | 'state'
  | 'address'
  | 'city'
  | 'phone'
  | 'description';

export type CheckoutDialogBox = 'cart' | 'checkout' | 'payment';

export type TCreateAddressVariables = {
  addressline1: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
};

export type TUpdateGuestVariables = {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
};

export type CheckoutTypes = {
  email: string;
  firstname: string;
  lastname: string;
  country: string;
  state: string;
  addressline1: string;
  city: string;
  phone: string;
  description: string;
  postcode: string;
};
