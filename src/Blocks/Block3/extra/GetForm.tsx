import { useState } from 'react';
import { useBlockSelector } from '../../../components';
import clx from 'classnames';
import { BlockProviderProps } from '../../../components';
import { GetFormProps } from './type';
import { CustomThemeProps } from '../../../types';
import { useGetFormStyles } from '../styles/getFormStyles';

export const GetForm = ({}: Partial<GetFormProps>) => {
  const { buttonConfig } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const classes = useGetFormStyles(buttonConfig as CustomThemeProps);
  const [isLoading] = useState(false);

  const handleSubscribeButtonClick = () => {};

  return (
    <div className={clx(classes.footerInput)}>
      <button
        type="submit"
        className={clx(classes.footerInputButton)}
        onClick={handleSubscribeButtonClick}
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </div>
  );
};
