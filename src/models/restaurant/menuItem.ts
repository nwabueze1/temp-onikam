import { gql } from '@apollo/client';

export const CORE_MENU_ITEM_FIELDS = gql`
  fragment CoreMenuItemFields on MenuItem {
    uuid
    name
    description
    menuCategory {
      uuid
      id
    }
    options
    image
    price
  }
`;
