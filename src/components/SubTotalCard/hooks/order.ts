import { useSelector, useDispatch } from 'react-redux';
// import Cookies from 'universal-cookie';
import { PaymentMethod } from '../types';
import { createApolloClient, notify } from '../../../helper';
import { CoreCartFields } from '../../../models';
import { KiamoniState } from '../../Provider';
import { usePaypalPayment } from './payment';
import { CREATE_ORDER } from '../graphql/mutation';

export const useCreateOrder = () => {
  const { restaurant, gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? '');
  const makePaypalPayment = usePaypalPayment();

  return async (paymentMethod: PaymentMethod, total: number) => {
    const cart = restaurant?.cart as CoreCartFields;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_NETWORK_OPERATION', payload: 'create.order' });

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ORDER,
        variables: {
          payment_type:
            String(paymentMethod.type).toLowerCase() === 'paypal'
              ? undefined
              : paymentMethod.type,
          grand_total:
            total +
            (cart?.guest?.address?.uuid
              ? (cart?.restaurant?.bank_info?.delivery_fee as number)
              : 0),
          address_uuid: cart?.guest?.address?.uuid ?? undefined,
          cart_uuid: cart?.uuid,
        },
      });

      if (!data || errors)
        throw new Error('We could not complete that operation');

      const order = data.createOrder;

      if (String(paymentMethod) === 'PAYPAL')
        return makePaypalPayment(order.uuid);

      dispatch({ type: 'UPDATE_ORDER', payload: order });
      notify('success', 'Order placed successfully');

      return order;
    } catch (error) {
      console.log('order error', error);
      notify('error', 'We could not complete that operation');
    }

  };
};
