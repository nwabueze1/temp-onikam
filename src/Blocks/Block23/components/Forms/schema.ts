import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { KiamoniState } from '../../../../components';
const stringSchema = Yup.string().required();
const addressSchema = Yup.string().when('delivery option', {
  is: 'delivery',
  then: (schema1) => schema1.required(),
});

export const deliveryOptions = ['pickup', 'delivery'];

export const useSchema = () => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const guest = restaurant?.cart?.guest;

  const userInfoKeys: Array<'firstname' | 'lastname' | 'email' | 'phone'> = [
    'firstname',
    'lastname',
    'email',
    'phone',
  ];
  const addressKeys: Array<
    'addressline1' | 'postcode' | 'city' | 'state' | 'country'
  > = ['addressline1', 'postcode', 'city', 'state', 'country'];

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const schema = Yup.object().shape({
    firstname: Yup.string().required('First name is a required field'),
    lastname: Yup.string().required('Last name is a required field'),
    email: Yup.string()
      .required('Email is a required field')
      .email('Must be a valid email address'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExp, 'Invalid phone number'),
    'delivery option': stringSchema,
    addressline1: addressSchema.label('Address'),
    city: addressSchema.label('City'),
    state: addressSchema.label('State'),
    country: addressSchema.label('Country'),
    postcode: addressSchema.label('Post code'),
  });

  const initialState = () => {
    const state: Record<string, string> = {};
    userInfoKeys.forEach((key) => (state[key] = guest?.[key] ?? ''));
    addressKeys.forEach(
      (key) => (state[key] = (guest?.address?.[key] as string) ?? '')
    );
    state['payment method'] = '';
    state['delivery option'] = guest?.address?.uuid ? 'delivery' : 'pickup';

    return state;
  };

  return {
    initialState: initialState(),
    validationSchema: schema,
  };
};
