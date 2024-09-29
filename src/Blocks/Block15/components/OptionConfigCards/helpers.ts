import { MenuConfigType } from '.';
import { CoreMenuItemFields } from '../../../../models';

export const extractInitialMenuItemOptions = (menuItem: CoreMenuItemFields) => {
  const initialState: MenuConfigType[] = [];
  const options = menuItem?.options || [];

  const options_configs =
    menuItem?.menu?.options_config?.filter((option) =>
      options?.includes(option?.uuid)
    ) || [];

  options_configs.forEach((option_config) => {
    initialState.push({
      name: option_config?.name,
      uuid: option_config?.uuid,
      selectedChoices: [],
      //@ts-ignore
      options: option_config?.options[option_config.type as string] || {},
      type: option_config?.type as 'selection' | 'deselection' | 'extras',
    });
  });

  return initialState;
};

export const getOptionText = (type: 'selection' | 'deselection' | 'extras') => {
  switch (type) {
    case 'selection':
      return 'You can only pick one option';
    case 'deselection':
      return 'You can remove one option';
    default:
      return 'You can pick multiple items to add';
  }
};

export const calculateSumOfOption = (options: MenuConfigType[]) => {
  return options?.reduce(
    (a, option) =>
      a +
      option.selectedChoices.reduce(
        (a, b) => a + (option.type === 'deselection' ? -b.amount : b.amount),
        0
      ),
    0
  );
};
