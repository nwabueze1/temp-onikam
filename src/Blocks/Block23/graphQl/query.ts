import { gql } from '@apollo/client';
import { CORE_CART_FIELDS } from '../../../models';

export const GET_CART_BY_UUID = gql`
  ${CORE_CART_FIELDS}
  query GqlGetCart($uuid: ID!) {
    getCart(uuid: $uuid) {
      ...CoreCartFields
    }
  }
`;

export const GET_ORDER_BY_UUID = gql`
  query GqlGetOrder($uuid: ID!) {
    getOrder(uuid: $uuid) {
      cart {
        currency
        cartItems {
          uuid
          quantity
          detail
          options
          menuItem {
            name
            options
            image
          }
        }
      }
      address {
        guest {
          firstname
          lastname
          phone
        }
      }
      restaurant {
        bank_info {
          delivery_fee
        }
      }
      grand_total
      payment_type
      order_type
      quantity
      uuid
    }
  }
`;
