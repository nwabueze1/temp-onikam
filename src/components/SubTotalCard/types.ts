export type PaymentCardTypes = {
  variant: string;
  type: 'checkout' | 'payment' | 'cart';
  onProceed: () => void;
  mode: 'view' | 'edit';
  total: number;
  deliveryOption: string;
  onPaymentSuccessFull?: () => void;
};

export type PaymentMethod = {
  type:
    | 'Cash_On_Delivery'
    | 'Bank_Transfer'
    | 'STRIPE'
    | 'PAYPAL'
    | 'PAYSTACK'
    | 'EMAIL'
    | 'Hivedeck_Payment';
  config: string;
};

export type PayDataTypes = {
  delivery_fee: number | null | undefined;
  subTotal?: number;
};

export interface InitiatePaymentInputType {
  full_name: string;
  email: string;
  phone_number: string;
  amount: number;
  redirect_url: string;
  site_uuid: string;
  description?: string;
  metadata?: { [key: string]: any };
}
