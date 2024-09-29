import {
  BlockProviderProps,
  DishCard,
  useBlockSelector,
} from '../../../../components';
import { FC } from 'react';
import { CustomThemeProps } from '../../../../types';
import { useCardComponentStyles } from './styles';
import clx from 'classnames';
import { DishCardProps } from './type';
import { createImageSrcset, createResponsiveImage } from '../../../../helper';
import { decodeText } from '../../../../helper/decodeText';

export const Card: FC<DishCardProps> = ({ image, name, role, type, mode }) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useCardComponentStyles(mainConfig as CustomThemeProps);

  return (
    <article className={clx(classes.root, type)}>
      {type === 'regular' ? (
        <>
          {createResponsiveImage(image, {
            className: classes.cardImage,
            styles: {
              picture: {
                display: 'flex',
              },
            },
          })}
          {/* <img
            className={classes.cardImage}
            src={image?.src}
            srcSet={createImageSrcset(image)}
            draggable={false}
          /> */}
          <h3 className={classes.name}>{decodeText(name)}</h3>
          <p className={classes.role}>{decodeText(role)}</p>
        </>
      ) : (
        <>
          <DishCard hasSearch={false} mode={mode}>
            <img
              draggable={false}
              src={image?.src}
              className={classes.dishCardImg}
              srcSet={createImageSrcset(image)}
            />
          </DishCard>
          <h3 className={clx(classes.name, type)}>{decodeText(name)}</h3>
          <p className={clx(classes.role, type)}>{decodeText(role)}</p>
        </>
      )}
    </article>
  );
};
