import { gql } from '@apollo/client';
import { CORE_RESTAURANT_FIELDS } from './restaurant';
import { CORE_MENU_ITEM_FIELDS } from './menuItem';
import { CORE_MENU_CATEGORY_FIELDS } from './menuCategory';

export const CORE_MENU_FIELDS = gql`
  ${CORE_MENU_CATEGORY_FIELDS}
  ${CORE_MENU_ITEM_FIELDS}
  ${CORE_RESTAURANT_FIELDS}
  fragment CoreMenuFields on Menu {
    uuid
    name
    activeMenuCategories {
      ...CoreMenuCategoryFields
    }
    activeMenuItems {
      ...CoreMenuItemFields
    }
    options_config {
      name
      uuid
      type
      options {
        selection {
          amount
          name
        }
        extras {
          amount
          name
        }
        deselection {
          amount
          name
        }
      }
    }
    restaurant {
      ...CoreRestaurantFields
    }
  }
`;
