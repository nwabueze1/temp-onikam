import { gql } from '@apollo/client';

export const CORE_RELATED_MENU_ITEMS_FIELDS = gql`
  fragment CoreRelatedMenuItemsFields on MenuItem {
    image
    price
    name
    slug
  }
`;
