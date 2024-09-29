import { gql } from '@apollo/client';

export const CORE_PAGINATOR_INFO_FIELDS = gql`
  fragment CorePaginatorInfo on PaginatorInfo {
    currentPage
    lastPage
  }
`;
