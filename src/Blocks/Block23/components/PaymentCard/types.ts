import { ReactNode } from 'react';

export type PaymentCardTypes = {
  total?: number;
  variant: string;
  text?: string;
  gotoCheckout?: () => void;
  mode: 'view' | 'edit' | undefined;
  type: 'details' | 'summary';
  children?: ReactNode;
  loading?: boolean;
};
