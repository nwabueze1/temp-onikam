export type OptionsProps = {
  name: string;
  amount: number;
  text?: string;
  type?: string;
};

export type TAddToCartVariables = {
  detail: string;
  quantity: number;
  options?: string;
  menu_item_uuid: string;
};

export type SingleOptionProps = 'deselection' | 'selection' | 'extras';
