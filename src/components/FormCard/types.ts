import { FormikHelpers } from 'formik';

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

export type FormData = {
  name: string;
  email?: string;
};

export type TUpdateGuestVariables = {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
};

export type FormCardRef = {
  submit?: () => void;
};

export type FormCardProps = {
  deliveryOption: (data: string) => void;
  isPayment: boolean;
  pickedOption: string;
  handleSubmit: (
    data: Record<string, string>,
    formikProps: FormikHelpers<Record<string, string>>
  ) => void;
};
