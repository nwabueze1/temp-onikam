import { gql } from '@apollo/client';

export const CORE_BLOG_CATEGORY_FIELDS = gql`
  fragment CoreCategoryFields on Category {
    uuid
    name
  }
`;
