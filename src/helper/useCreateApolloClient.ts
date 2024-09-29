import { useSelector } from 'react-redux';
import { BlockProviderProps } from '../components';
import { createApolloClient } from './graphql';

export const useCreateApolloClient = () => {
  const { gatewayUrl } = useSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );

  return {
    client: gatewayUrl ? createApolloClient(gatewayUrl) : null,
  };
};
