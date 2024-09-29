import { gql } from '@apollo/client';
import { CORE_MENU_ITEM_FIELDS } from './restaurant';

export const CORE_CART_ITEM_FIELDS = gql`
  ${CORE_MENU_ITEM_FIELDS}
  fragment CoreCartItemFields on CartItem {
    uuid
    options
    quantity
    detail
    menuItem {
      ...CoreMenuItemFields
    }
    cart {
      cartItems {
        uuid
      }
    }
  }
`;

export const CORE_CART_FIELDS = gql`
  fragment CoreCartFields on Cart {
    uuid
    currency
    cartItems {
      uuid
      quantity
      options
      detail
      menuItem {
        image
      }
    }
  }
`;