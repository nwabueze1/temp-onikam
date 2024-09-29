import { gql } from '@apollo/client';

export const CORE_AUTHOR_FIELDS = gql`
  fragment CoreAuthorFields on User {
    name
    uuid
  }
`;
