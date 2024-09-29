import { ServiceCardProps } from '../../types';
import { FC } from 'react';
import { useServiceCardStyles } from './styles';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import clx from 'classnames';
import { decodeText } from '../../../../helper/decodeText';

export const ServiceCard: FC<ServiceCardProps> = ({
  image,
  text,
  header,
  layoutClass,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);

  const classes = useServiceCardStyles(mainConfig as CustomThemeProps);

  return (
    <section
      className={clx(classes.root, layoutClass)}
      data-info="service-card"
    >
      <h3 className={classes.header}>{decodeText(header)}</h3>
      {layoutClass === 'layout_5' ? (
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className={classes.descriptionImage}
        />
      ) : (
        <div className={classes.descriptionText}>{decodeText(text)}</div>
      )}
    </section>
  );
};
