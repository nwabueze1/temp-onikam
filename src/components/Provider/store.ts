import { legacy_createStore as createStore } from 'redux';

import {
  CoreCartFields,
  CoreCategoriesFields,
  CoreMenuFields,
  CorePostFields,
  CoreSiteFields,
} from '../../models';
import { dummyCart } from './dummyCart';
type kiamoniAction = {
  type:
    | 'GET_KIAMONI'
    | 'GET_MENU_ITEMS'
    | 'SET_LOADING'
    | 'SET_NETWORK_OPERATION'
    | 'DELETE_CART_ITEM'
    | 'UPDATE_CART_ITEM'
    | 'ADD_CART_ITEM'
    | 'SET_CART_ITEM_COUNT'
    | 'GET_CART'
    | 'GET_MENU'
    | 'UPDATE_ORDER'
    | 'GET_POSTS'
    | 'SET_BLOG_PAGINATION'
    | 'GET_BLOG';
  payload: any;
};

import * as Palette from './../../palettes';

export type RestaurantState = {
  menu?: CoreMenuFields;
  cart?: CoreCartFields;
  cartItemCount?: number;
};

export type BlogState = {
  posts?: CorePostFields[];
  paginatorInfo?: CorePaginatorInfoProps;
  categories?: CoreCategoriesFields[];
};

export type CorePaginatorInfoProps = {
  currentPage: number;
  lastPage: number;
};

export type PageState = {
  uuid: string;
  title: string;
  status: boolean;
  description: string | null;
  metadata: string | null;
  site: CoreSiteFields;
};

export type KiamoniState = {
  gatewayUrl?: string;
  fonts?: { [key: string]: string };
  colors?: {
    [key: string]: {
      [key: string]: string;
    };
  };
  page?: PageState;
  restaurant?: RestaurantState;
  blog?: BlogState;
  loading?: boolean;
  networkOperation?: string;
};

export const kiamoniReducer = (state: KiamoniState, action: kiamoniAction) => {
  switch (action.type) {
    case 'GET_KIAMONI':
      return { ...state, main: action.payload };
    case 'GET_MENU_ITEMS':
      return { ...state, restaurant: { menu: { menuItems: action.payload } } };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'DELETE_CART_ITEM':
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            cartItems: state?.restaurant?.cart?.cartItems?.filter(
              (item) => item?.uuid !== action.payload?.uuid
            ),
          },
        },
      };
    case 'SET_NETWORK_OPERATION':
      return { ...state, networkOperation: action.payload };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        restaurant: {
          ...state.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            cartItems: state?.restaurant?.cart?.cartItems?.map((item) =>
              item.uuid === action.payload.uuid
                ? { ...item, quantity: action.payload.quantity }
                : item
            ),
          },
        },
      };

    case 'SET_CART_ITEM_COUNT':
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cartItemCount: action.payload,
        },
      };

    case 'GET_CART':
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cart: action.payload,
        },
      };

    case 'GET_MENU':
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          menu: action.payload,
        },
      };

    case 'UPDATE_ORDER':
      return {
        ...state,
        restaurant: {
          ...state?.restaurant,
          cart: {
            ...state?.restaurant?.cart,
            order: { ...state?.restaurant?.cart?.order, ...action.payload },
          },
        },
      };

    case 'GET_POSTS':
      return {
        ...state,
        blog: {
          ...state.blog,
          posts: action.payload,
        },
      };

    case 'SET_BLOG_PAGINATION':
      return {
        ...state,
        blog: {
          ...state.blog,
          paginatorInfo: action.payload,
        },
      };

    case 'GET_BLOG':
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
};

export const store = () =>
  createStore(kiamoniReducer as any, {
    gatewayUrl: 'https://ploutonion.hogfort.com/graphql',
    restaurant: {
      cartItemCount: 1,
      cart: dummyCart,
    },
    colors: {
      ...Palette.palette3.colors,
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
    },
  });
