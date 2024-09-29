import { useSelector } from 'react-redux';
import { createApolloClient, notify } from '../../../helper';
import { INITIATE_PAYMENT, MAKE_PAYPAL_PAYMENT } from '../graphql/mutation';
import { KiamoniState } from '../../Provider';
import { InitiatePaymentInputType } from '../types';

export const usePaypalPayment = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? '');

  return async (order_uuid: string) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: MAKE_PAYPAL_PAYMENT,
        variables: { order_uuid, pageRedirect: window.location.pathname },
      });

      if (!data || !data?.makePaypalDirectPayment?.redirect_url || errors)
        throw new Error('We could not complete that operation');

      const {
        makePaypalDirectPayment: { redirect_url },
      } = data;
      window.location.href = redirect_url;
    } catch (error) {
      notify('error', 'We could not complete that operation');
    }
  };
};

export const useInitiatePayment = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? '');


  return async (variables: InitiatePaymentInputType) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: INITIATE_PAYMENT,
        variables: {
          input: {
            ...variables,
          },
        },
      });
      if (!data || !data?.initiateGatewayPayment?.link || errors)
        throw new Error('We could not complete that operation');

      const {
        initiateGatewayPayment: { link },
      } = data;
      window.location.href = link;
    } catch (e) {
      notify('error', 'We could not complete that operation');
    }
  };
};
