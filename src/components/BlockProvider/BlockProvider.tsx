import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BlockProviderProps } from '.';
import { blockContext, blockStore } from '.';

export const BlockProvider: FC<BlockProviderProps> = ({
  children,
  mainConfig,
  buttonConfig,
  gatewayUrl,
  block_uuid,
}) => {
  return (
    <ReduxProvider
      store={blockStore(
        mainConfig as any,
        buttonConfig as any,
        gatewayUrl as string,
        block_uuid as string
      )}
      context={blockContext as any}
    >
      {children}
    </ReduxProvider>
  );
};
