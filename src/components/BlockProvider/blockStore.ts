import { legacy_createStore as createStore } from 'redux';
import { createContext } from 'react';
import { createSelectorHook } from 'react-redux';

type mainAction = {
  type: 'GET_MAIN_PROPS';
  payload: string[];
};

type blockAction = mainAction;

export type blockState = {
  main: {
    colors?: Record<string, string>;
    fonts?: {
      heading: string;
      body: string;
      misc?: string;
    };
  };
};

export const blockReducer = (state: blockState, action: blockAction) => {
  switch (action.type) {
    case 'GET_MAIN_PROPS':
      return { ...state, main: action.payload };
    default:
      return state;
  }
};

export const blockStore = (
  mainConfig: { [key: string]: string },
  buttonConfig: { [key: string]: string },
  gatewayUrl?: string,
  block_uuid?: string
) =>
  createStore(blockReducer as any, {
    mainConfig,
    buttonConfig,
    gatewayUrl,
    block_uuid,
  });

export const blockContext = createContext({});
export const useBlockSelector = createSelectorHook(blockContext as any);
