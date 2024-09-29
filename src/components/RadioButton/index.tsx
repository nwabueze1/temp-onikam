import { FC } from 'react';
import { RadioProps } from './types';
import { useRadioButtonStyles } from './styles';
import clx from 'classnames';
import { CustomThemeProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';

export const RadioButtonComponent: FC<RadioProps> = ({
  value,
  checked,
  onChange,
  name,
  isColor,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useRadioButtonStyles(mainConfig as CustomThemeProps);
  return (
    <article className={clx(classes.container, isColor)}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={classes.radioStyle}
      />
    </article>
  );
};
