import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { FC } from 'react';
import { SpinnerProps } from '../../type';
import { useSpinAnimationStyles } from '../SpinAnimation';
import { CustomThemeProps } from '../../../../types';
import { createImageSrcset, imageSizes } from '../../../../helper';

export const CircularSpinner: FC<SpinnerProps> = ({
  size,
  divWidth,
  getRotationDegree,
  rotation,
  duplicatedImages,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

  return (
    <>
      {Array(8)
        .fill(Math.random() * 1000)
        ?.map((items: number, i: number) => (
          <div
            key={items}
            className={classes.dishes}
            style={{
              width:
                size === 'small' ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              height:
                size === 'small' ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              transform:
                getRotationDegree(
                  rotation >= 360 ? rotation % 360 : rotation
                ) === i
                  ? `translate(-50%, -50%) rotate(${45 * i}deg) translate(${
                      divWidth / 2
                    }px) rotate(-${45 * i}deg) scale(1.5)`
                  : `translate(-50%, -50%) rotate(${45 * i}deg) translate(${
                      divWidth / 2
                    }px) rotate(-${45 * i}deg)`,
              background:
                getRotationDegree(
                  rotation >= 360 ? rotation % 360 : rotation
                ) === i
                  ? `${mainConfig?.colors?.[300]}`
                  : `linear-gradient(107.76deg, ${mainConfig?.colors?.[600]} 20.81%, ${mainConfig?.colors?.[700]} 103.65%)`,
            }}
          >
            <div
              style={{
                width:
                  size === 'small' ? `${divWidth / 6}px` : `${divWidth / 8}px`,
                height:
                  size === 'small' ? `${divWidth / 6}px` : `${divWidth / 8}px`,
              }}
              className={classes.dishLine}
            >
              <img
                src={duplicatedImages[i].image?.src}
                srcSet={createImageSrcset(duplicatedImages[i].image)}
                sizes={imageSizes}
                alt={duplicatedImages[i].image?.alternative_text}
                className={classes.dishImage}
              />
            </div>
          </div>
        ))}
    </>
  );
};
