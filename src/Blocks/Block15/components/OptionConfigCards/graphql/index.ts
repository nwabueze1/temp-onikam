import { gql } from '@apollo/client';
import { CORE_CART_ITEM_FIELDS } from '../../../../../models';

export const CREATE_CART = gql`
  mutation GqlCreateCart($site_uuid: ID, $currency: String) {
    createCart(input: { site_uuid: $site_uuid, currency: $currency }) {
      uuid
      expires
    }
  }
`;

export const CREATE_CART_ITEM = gql`
  ${CORE_CART_ITEM_FIELDS}
  mutation GqlCreateCartItem(
    $detail: String!
    $quantity: Int!
    $cart_uuid: ID
    $menu_item_uuid: ID
    $options: String
  ) {
    createCartItem(
      input: {
        detail: $detail
        quantity: $quantity
        cart_uuid: $cart_uuid
        menu_item_uuid: $menu_item_uuid
        options: $options
      }
    ) {
      ...CoreCartItemFields
    }
  }
`;
