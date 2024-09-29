import { gql } from '@apollo/client';

export const CORE_MENU_OPTIONCONFIG_FIELDS = gql`
  fragment CoreMenuOptionsConfigFields on MenuOptionsConfig {
    name
    uuid
    options {
      deselection {
        amount
        name
      }
      extras {
        amount
        name
      }
      selection {
        amount
        name
      }
    }
  }
`;
