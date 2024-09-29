import { gql } from '@apollo/client';

export const GET_PAYMENT_METHODS = gql`
  query GqlGetPaymentMethods($service_uuid: ID!) {
    getPaymentMethods(service_uuid: $service_uuid) {
      type
      config
      instruction
    }
  }
`;

export const GET_GATEWAY_PROCESSORS_BY_SITE = gql`
  query GqlGetPaymentProcessorsBySiteUuid(
    $input: GetGatewayProcessorsBySiteUuidInput!
  ) {
    getGatewayProcessorsBySiteUuid(input: $input) {
      site_uuid
      payment_type_uuid
      account_reference_id
      details
    }
  }
`;
