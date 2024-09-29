import { gql } from '@apollo/client';

export const CORE_MENU_CATEGORY_FIELDS = gql`
  fragment CoreMenuCategoryFields on MenuCategory {
    uuid
    id
    title
    description
  }
`;
