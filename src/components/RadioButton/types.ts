import { ChangeEvent } from 'react';

export type RadioProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isColor?: boolean;
};

