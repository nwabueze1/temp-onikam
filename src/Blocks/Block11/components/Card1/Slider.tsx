import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { useCarousel3Styles } from '.';
import clx from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { useStyles } from '../../helper';
import { CarouselProps } from '../../types';
import { createImageSrcset, createResponsiveImage } from '../../../../helper';
import { Pointer } from '../../../../components/Pointer';

export const Slider: FC<CarouselProps> = ({
  layouts,
  images,
  clickable,
  screenSize,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useCarousel3Styles(mainConfig as CustomThemeProps);
  const [position, setPosition] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const layoutArray = ['layout_2', 'layout_3', 'layout_4', 'layout_5'];
  const { rightStyles, centerStyles, leftStyles } = useStyles(position);

  const handleClick = (i: number) => {
    setPosition(i);
  };

  const startInterval = () => {
    if (layouts === 'layout_4') return;
    intervalRef.current = setInterval(() => {
      setPosition((cardIndex) => (cardIndex > 1 ? 0 : cardIndex + 1));
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
      >
        {layouts === 'layout_5' ? (
          <div
            className={clx(classes.blockImages, layouts)}
            style={{
              backgroundImage: `url('${images?.[0]?.image?.src}')`,
            }}
          />
        ) : (
          <>
            <div
              className={clx(classes.left, layouts)}
              style={leftStyles}
              onClick={() => clickable && setPosition(2)}
            >
              {createResponsiveImage(images[0]?.image, {
                className: classes.image,
                classNames: {
                  picture: classes.imageContainer,
                },
                screenSize,
              })}
            </div>
            <div
              className={clx(classes.center, layouts)}
              style={centerStyles}
              onClick={() => clickable && setPosition(0)}
            >
              <div className={classes.imageContainer}>
                <img
                  src={images[1]?.image?.src}
                  className={classes.image}
                  srcSet={createImageSrcset(images?.[1]?.image)}
                />
              </div>
            </div>
            <div
              className={clx(classes.right, layouts)}
              style={rightStyles}
              onClick={() => clickable && setPosition(1)}
            >
              <div className={classes.imageContainer}>
                <img
                  src={images[2]?.image?.src}
                  className={classes.image}
                  srcSet={createImageSrcset(images?.[2]?.image)}
                />
              </div>
            </div>
          </>
        )}
      </div>
      {!layoutArray.includes(layouts) && (
        <div className={classes.pointerContainer}>
          <Pointer
            pointerCount={3}
            currentSlide={position}
            onClick={handleClick}
            lg={true}
          />
        </div>
      )}
    </div>
  );
};
