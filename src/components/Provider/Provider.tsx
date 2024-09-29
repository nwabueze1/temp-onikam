import { FC } from 'react';
import { ReactReduxContext, Provider as ReduxProvider } from 'react-redux';
import { ProviderProps } from '.';
import { store } from '.';

export const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ReduxProvider store={store()} context={ReactReduxContext}>
      {children}
    </ReduxProvider>
  );
};
