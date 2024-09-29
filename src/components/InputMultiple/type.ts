import { ChangeEvent, FocusEvent } from 'react';

export type InputProps = {
  value: string | undefined;
  type: string | undefined;
  name: string | undefined;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  color?: string;
  validation?: boolean;
  handleBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  is_formik?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
};
