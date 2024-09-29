import { AutoSpinnerProps } from '../../type';
import clx from 'classnames';
import { FC } from 'react';
import { useSpinAnimationStyles } from '../SpinAnimation';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { createResponsiveImage } from '../../../../helper';

export const TranslationalSpinner: FC<AutoSpinnerProps> = ({
  size,
  divWidth,
  translate,
  imageArray,
  screenSize,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

  return (
    <>
      {Array(imageArray?.length)
        .fill(0)
        ?.map((_, i: number) => {
          return (
            <div
              key={i}
              className={clx(classes.dishes, 'vertical')}
              style={{
                width:
                  size === 'small'
                    ? `${divWidth / 5}px`
                    : `${divWidth / 6.5}px`,
                height:
                  size === 'small'
                    ? `${divWidth / 5}px`
                    : `${divWidth / 6.5}px`,
                transform: i === translate + 1 ? 'scale(1.5)' : 'scale(1)',
                background:
                  i === translate + 1
                    ? `${mainConfig?.colors?.[300]}`
                    : `linear-gradient(107.76deg, ${mainConfig?.colors?.[600]} 20.81%, ${mainConfig?.colors?.[700]} 103.65%)`,
              }}
            >
              {createResponsiveImage(imageArray?.[i]?.image, {
                screenSize,
                classNames: {
                  picture: classes.dishLine,
                },
                className: classes.dishImage,
                styles: {
                  picture: {
                    width:
                      size === 'small'
                        ? `${divWidth / 6}px`
                        : `${divWidth / 8}px`,
                    height:
                      size === 'small'
                        ? `${divWidth / 6}px`
                        : `${divWidth / 8}px`,
                  },
                },
              })}
            </div>
          );
        })}
    </>
  );
};
