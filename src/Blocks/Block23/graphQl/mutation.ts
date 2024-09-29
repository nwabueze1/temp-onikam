import { gql } from '@apollo/client';
import { CORE_CART_ITEM_FIELDS } from '../../../models';

export const UPDATE_CART_ITEM = gql`
  ${CORE_CART_ITEM_FIELDS}
  mutation gqlUpdateCartItem($uuid: ID, $quantity: Int!, $options: String) {
    updateCartItem(
      input: { uuid: $uuid, quantity: $quantity, options: $options }
    ) {
      ...CoreCartItemFields
    }
  }
`;

export const VERIFY_PAYMENT = gql`
  mutation GqlVerifyPayment($input: verifyGatewayPaymentInput) {
    verifyGatewayPayment(input: $input) {
      uuid
      status
      payment_type_uuid
      amount
      details
    }
  }
`;

export const UPDATE_ORDER = gql`
  mutation GqlUpdateOrder(
    $uuid: ID!
  ) {
    updateOrder(
      input: {
        uuid: $uuid
      }
    ) {
      cart {
        guest {
          firstname
          lastname
          phone
        }
      }
    }
  }
`;
