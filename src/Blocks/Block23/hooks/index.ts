import { KiamoniState } from '../../../components';
import { createApolloClient, notify } from '../../../helper';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_ORDER_BY_UUID,
  UPDATE_CART_ITEM,
  UPDATE_ORDER,
  VERIFY_PAYMENT,
} from '../graphQl';
import { CoreCartFields, CoreCartItemFields } from '../../../models';
import Cookies from 'universal-cookie';
import {
  TUpdateCartItemQuantityVariables,
  VerifyPaymentInputType,
} from '../types';

export const useUpdateCartItemQuantity = () => {
  const { restaurant, gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const client = createApolloClient(gatewayUrl ?? '');
  const updateCartCount = useUpdateCartCount();

  return async (variables: TUpdateCartItemQuantityVariables) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({
        type: 'SET_NETWORK_OPERATION',
        payload: `update.cart-item.${variables.uuid}`,
      });

      const { data, errors } = await client.mutate({
        mutation: UPDATE_CART_ITEM,
        variables,
      });

      if (!data || errors) {
        const error = new Error('We could not complete that operation');
        throw error;
      }

      const cartItem = cart?.cartItems?.find(
        ({ uuid }) => uuid === variables?.uuid
      ) as CoreCartItemFields;

      notify(
        'success',
        variables.quantity === 0
          ? 'Item deleted successfully'
          : 'Item updated successfully'
      );
      variables.quantity === 0
        ? dispatch({ type: 'DELETE_CART_ITEM', payload: cartItem })
        : dispatch({
            type: 'UPDATE_CART_ITEM',
            payload: { ...cartItem, quantity: variables.quantity },
          });
      variables.quantity === 0 && updateCartCount();
    } catch (error) {
      notify('error', 'We could not complete that operation');
    }

    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({ type: 'SET_NETWORK_OPERATION', payload: '' });
  };
};

const useUpdateCartCount = () => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const dispatch = useDispatch();
  const cart = restaurant?.cart as CoreCartFields;
  const cookies = new Cookies();

  return () => {
    const cartItemCountCookie = cookies.get('cartItemCount');
    const siteUuid = cart?.restaurant?.site?.uuid as string;
    const updatedCount = cartItemCountCookie[siteUuid] - 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: 'SET_CART_ITEM_COUNT', payload: updatedCount });

    cookies.set('cartItemCount', cartItemCountCookie, {
      path: '/',
      expires: new Date(Date.now() + 86400000),
    });
  };
};

export const useVerifyPayment = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const client = createApolloClient(gatewayUrl ?? '');
  return async (variables: VerifyPaymentInputType) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: VERIFY_PAYMENT,
        variables: {
          input: {
            ...variables,
          },
        },
      });
      if (!data || !data?.verifyGatewayPayment?.uuid || errors)
        throw new Error('We could not complete that operation');

      return data.verifyGatewayPayment;
    } catch (e) {
      console.log('first', e);
      notify('error', 'We could not complete that operation');
    }
  };
};

export const useGetOrder = () => {
  const dispatch = useDispatch();
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const client = createApolloClient(gatewayUrl ?? '');

  return async (order_uuid: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data, errors } = await client.query({
        query: GET_ORDER_BY_UUID,
        variables: { uuid: order_uuid },
      });
      if (!data?.getOrder || errors) return undefined;

      return data?.getOrder;
    } catch (error) {
      //TODO: log this sentry
      dispatch({ type: 'SET_LOADING', payload: false });
      return undefined;
    }
  };
};

export const useUpdateOrder = () => {
  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>((state) => state);
  const cookies = new Cookies();
  const client = createApolloClient(gatewayUrl ?? "");

  return async (site_uuid: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const cartCookie = cookies.get("cart");
    const cartItemCountCookie = cookies.get("cartItemCount");
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_ORDER,
        variables: {
          uuid: queryParams.get("order_uuid"),
        },
      });

      if (!data || errors) throw new Error("We could not complete that operation");

      notify("success", "Order placed successfully");
      delete cartCookie[site_uuid];
      delete cartItemCountCookie[site_uuid];

      cookies.set("cart", cartCookie, { path: "/" });
      cookies.set("cartItemCount", cartItemCountCookie, { path: "/" });
      return data.updateOrder;
    } catch (error) {
      notify("error", "We could not complete that operation");
    }

    return undefined;
  };
};
