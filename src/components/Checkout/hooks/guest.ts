import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_GUEST } from '../graphql';
import Cookies from 'universal-cookie';
import { createApolloClient, notify } from '../../../helper';
import { TUpdateGuestVariables } from '../types';
import { KiamoniState } from '../../Provider';
import { CoreCartFields } from '../../../models';

export const useUpdateGuest = () => {
  const { restaurant, gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const client = createApolloClient(gatewayUrl ?? '');
  const cart = restaurant?.cart as CoreCartFields;
  const cookies = new Cookies();
  const cartCookie = cookies.get('cart');

  return async (
    variables: TUpdateGuestVariables,
    isPickup?: boolean,
    onSuccess?: () => void
  ) => {
    const siteUuid = cart?.restaurant?.site?.uuid as string;
    const cartUuid = cartCookie[siteUuid];
    console.log(cart);

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({
      type: 'SET_NETWORK_OPERATION',
      payload: isPickup ? 'set.delivery.pickup' : 'set.delivery.dispatch',
    });

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_GUEST,
        variables: { ...variables, cart_uuid: cartUuid },
      });

      if (!data || errors) {
        throw new Error('We could not complete that operation');
      }

      const guest = data.updateGuest;
      delete guest?.address;
      if (isPickup) {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({
          type: 'SET_NETWORK_OPERATION',
          payload: '',
        });
        dispatch({ type: 'UPDATE_GUEST', payload: guest });
        notify('success', 'Delivery option set as pickup');
        onSuccess?.();
      }

      return guest;
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({
        type: 'SET_NETWORK_OPERATION',
        payload: '',
      });

      notify('error', 'We could not complete that operation');
    }
  };
};
