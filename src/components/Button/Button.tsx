import { useButtonStyles } from './style';
import { ButtonProps } from './types';
import clx from 'classnames';
import { BlockProviderProps, useBlockSelector } from '../../components';
import { CustomThemeProps } from '../../types';
import { useRecordLinkClick } from '../../helper';

export const Button = ({
  type,
  destination,
  children,
  loading = false,
  mode,
}: ButtonProps) => {
  const { buttonConfig, block_uuid } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const buttonClasses = useButtonStyles(buttonConfig as CustomThemeProps);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  return (
    <a
      className={clx(buttonClasses.buttonDisplay, type, { loading })}
      href={mode === 'view' ? destination : undefined}
      onClick={() => handleClick(String(children), destination)}
    >
      {loading ? (
        <div className={clx(buttonClasses.spinner, type)}></div>
      ) : (
        children
      )}
    </a>
  );
};
