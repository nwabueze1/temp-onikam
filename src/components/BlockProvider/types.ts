import { ReactNode } from 'react';

export type BlockProviderProps = {
  mainConfig?: {
    colors: { [key: string]: string };
    fonts: any;
  };
  buttonConfig?: {
    colors: { [key: string]: string };
    fonts: any;
  };
  children: ReactNode;
  gatewayUrl?: string;
  block_uuid?: string;
};
