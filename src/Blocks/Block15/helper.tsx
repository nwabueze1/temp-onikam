import {
  CoreMenuFields_options_config,
  CoreMenuFields_options_config_options,
  CoreMenuItemFields,
} from '../../models';
import { OptionsProps, SingleOptionProps } from './types';

export const extractCurrencyToMenuItems = (data: CoreMenuItemFields[]) => {
  return data.map((item) => {
    return {
      uuid: item.uuid,
      name: item.name,
      image: item.image,
      menu: item.menu,
      price: item.price,
    };
  });
};

export const sortSelectedOption = (
  { deselection, extras, selection }: CoreMenuFields_options_config_options,
  optionItem: string
) => {
  const optionArray: OptionsProps[] = [];

  deselection?.filter((item) => {
    if (item?.name !== '') {
      const obj = {
        ...item,
        text: 'You can pick multiple items to remove',
        type: 'deselection',
        optionItem,
      };
      optionArray.push(obj);
    }
  });

  selection?.filter((item) => {
    if (item?.name !== '') {
      const obj = {
        ...item,
        text: 'You can only pick one option',
        type: 'selection',
        optionItem,
      };
      optionArray.push(obj);
    }
  });

  extras?.filter((item) => {
    if (item?.name !== '') {
      const obj = {
        ...item,
        text: 'You can pick multiple items to add',
        type: 'extras',
        optionItem,
      };
      optionArray.push(obj);
    }
  });

  return optionArray;
};

export const getDeselectOptions = (
  getOptionsConfig: (CoreMenuFields_options_config | undefined)[]
) => {
  let deselect;
  getOptionsConfig?.map((item) => {
    const optionArray = item?.options && sortSelectedOption(item?.options, '');
    const options = optionArray?.filter((data) => data.type === 'deselection');
    if ((options ?? []).length > 0) {
      deselect = options;
    }
  });
  return [...(deselect ?? [])];
};

export function sumAmountByType(
  options: OptionsProps[],
  total: number
): number {
  for (const option of options) {
    if (option.type === 'deselection') {
      total -= option.amount;
    } else {
      total += option.amount;
    }
  }
  return total;
}

export function extractUniqueTypes(arr: OptionsProps[]) {
  const typesSet = new Set();

  arr?.forEach((obj) => {
    typesSet.add(obj?.type);
  });

  return Array.from(typesSet);
}

export function checkIfDishExists(
  optionsConfig: CoreMenuFields_options_config_options | undefined,
  type: SingleOptionProps,
  name: string
) {
  if (!type || !optionsConfig) return;

  const eachArray: string[] = [];
  (optionsConfig?.[type] ?? []).some((option: { name: string }) => {
    if (option.name === name) {
      eachArray.push(name);
    }
  });
  return eachArray;
}

export const getOptionData = (optionConfig: OptionsProps[]) => {
  return optionConfig?.map((item) => {
    return { name: item.name, amount: item?.amount, type: item?.type };
  });
};

export const titleText = (isSuccess: boolean) =>
  isSuccess
    ? 'Added to cart successfully!'
    : 'Failed to add to cart. Please try again.';
