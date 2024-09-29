export type FormData = {
  name: string;
  email?: string;
};

export type TUpdateCartItemQuantityVariables = {
  uuid: string;
  quantity: number;
};

export interface VerifyPaymentInputType {
  site_uuid: string;
  tx_ref: string;
  tx_id?: number;
  status: string;
}
