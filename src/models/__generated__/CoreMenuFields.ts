/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoreRestaurantFields } from './CoreRestaurantFields';
import { CoreMenuItemFields } from './CoreMenuItemFields';
import { CorePaginatorInfoProps } from '../../components';

// ====================================================
// GraphQL fragment: CoreMenuFields
// ====================================================

export interface CoreMenuFields_options_config_options_selection {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options_deselection {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options_extras {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options {
  selection: CoreMenuFields_options_config_options_selection[];
  deselection: CoreMenuFields_options_config_options_deselection[];
  extras: CoreMenuFields_options_config_options_extras[];
}

export interface CoreMenuFields_options_config {
  uuid: string;
  name: string;
  type?: string;
  options: CoreMenuFields_options_config_options;
}

export interface CoreMenuFields_menuItems_menuCategory {
  uuid: string;
  title: string;
}

export interface CoreMenuFields_menuCategories {
  uuid?: string;
  id: string;
  title: string;
  description?: string;
}

export interface CoreMenuFields {
  uuid: string;
  name: string;
  options_config?: (CoreMenuFields_options_config)[];
  menuItems: CoreMenuItemFields[];
  menuCategories: CoreMenuFields_menuCategories[];
  restaurant: CoreRestaurantFields;
  paginatorInfo?: CorePaginatorInfoProps;
}
