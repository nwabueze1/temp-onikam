import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { FC, useEffect, useRef, useState } from 'react';
import { CustomThemeProps } from '../../../../types';
import { useCarousel4Styles } from './style';
import clx from 'classnames';
import { CarouselProps } from '../../types';
import { Pointer } from '../../../../components';
import { createResponsiveImage } from '../../../../helper';

export const Carousel: FC<CarouselProps> = ({
  layouts,
  images,
  screenSize,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useCarousel4Styles(mainConfig as CustomThemeProps);
  const [cardIndex, setCardIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCardIndex((cardIndex) => (cardIndex > 1 ? 0 : cardIndex + 1));
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

  const handleClick = (index: number) => {
    setCardIndex(index);
  };

  function displayBackgroundImage() {
    return images?.map((item, index: number) => (
      <div
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
        style={{
          opacity: layouts === 'layout_2' || cardIndex === index ? 1 : 0,
        }}
        key={index}
      >
        {createResponsiveImage(item?.image, {
          className: classes.image,
          screenSize,
          classNames: {
            picture: clx(classes.backgroundImage, layouts),
          },
        })}
      </div>
    ));
  }

  return (
    <section className={classes.root}>
      <div
        className={clx(classes.container, layouts)}
        style={{
          transform:
            layouts === 'layout_2' ? `translateX(-${100 * cardIndex}%)` : '',
        }}
      >
        {displayBackgroundImage()}
      </div>
      <div className={classes.pointerContainer}>
        <Pointer
          pointerCount={3}
          currentSlide={cardIndex}
          onClick={handleClick}
          lg={true}
        />
      </div>
    </section>
  );
};
