import { ReactNode } from 'react';
export type ButtonProps = {
  type: 'primary' | 'secondary' | 'tertiary';
  destination?: string;
  loading?: boolean;
  children: ReactNode;
  mode: 'edit' | 'view';
};
