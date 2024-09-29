import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { CREATE_CART, CREATE_CART_ITEM } from '../graphql';
import { createApolloClient, useRecordAddToCart } from '../../../../../helper';
import {
  KiamoniState,
  BlockProviderProps,
  useBlockSelector,
} from '../../../../../components';
import { TAddToCartVariables } from '../../../types';
import { CoreMenuFields } from '../../../../../models';

export const useCreateCart = () => {
  const { restaurant, gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const client = createApolloClient(gatewayUrl ?? '');

  return async () => {
    const cartCookie: { [key: string]: string } = cookies.get('cart') ?? {};
    const cartItemCountCookie: { [key: string]: number } =
      cookies.get('cartItemCount') ?? {};
    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site
      ?.uuid as string;
    const currency = menu?.menuItems?.[0]?.menu?.restaurant?.bank_info
      ?.currency as string;
    const { data, errors } = await client.mutate({
      mutation: CREATE_CART,
      variables: { site_uuid: siteUuid, currency },
    });

    if (!data || errors) {
      const error = new Error('We could not complete that operation');
      throw error;
    }
    const { uuid, expires } = data.createCart;
    cartCookie[siteUuid] = uuid;
    cartItemCountCookie[siteUuid] = 0;
    cookies.set('cart', cartCookie, {
      path: '/',
      expires: new Date(expires),
    });
    cookies.set('cartItemCount', cartItemCountCookie, {
      path: '/',
      expires: new Date(expires),
    });
    return uuid;
  };
};

export const useAddToCart = () => {
  const { restaurant, gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const { block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const menu = restaurant?.menu as CoreMenuFields;
  const cookies = new Cookies();
  const createCart = useCreateCart();
  const client = createApolloClient(gatewayUrl ?? '');
  const updateCartCount = useUpdateCartCount();
  const dispatch = useDispatch();
  const recordAddToCart = useRecordAddToCart();

  return async (variables: TAddToCartVariables) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const cartCookie = cookies.get('cart');
    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid ?? '';
    let cartUuid: string;
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      if (!cartCookie || !cartCookie[siteUuid]) cartUuid = await createCart();
      else cartUuid = cartCookie[siteUuid];

      const { data, errors } = await client.mutate({
        mutation: CREATE_CART_ITEM,
        variables: { ...variables, cart_uuid: cartUuid },
      });

      if (!data || errors) {
        const error = new Error('We could not complete that operation');
        throw error;
      }

      recordAddToCart(variables.menu_item_uuid, block_uuid ?? '');
      dispatch({ type: 'SET_LOADING', payload: false });
      updateCartCount();
      return data;
    } catch (error) {
      //TODO: log this sentry
      dispatch({ type: 'SET_LOADING', payload: false });
      return undefined;
    }
  };
};

const useUpdateCartCount = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const menu = restaurant?.menu as CoreMenuFields;
  return () => {
    const cartItemCountCookie = cookies.get('cartItemCount');

    if (!cartItemCountCookie) return;

    const siteUuid = menu?.menuItems?.[0]?.menu?.restaurant?.site?.uuid ?? '';
    const updatedCount = cartItemCountCookie[siteUuid] + 1;
    cartItemCountCookie[siteUuid] = updatedCount;
    dispatch({ type: 'SET_CART_ITEM_COUNT', payload: updatedCount });

    cookies.set('cartItemCount', cartItemCountCookie, {
      path: '/',
      expires: new Date(Date.now() + 86400000),
    });
  };
};
