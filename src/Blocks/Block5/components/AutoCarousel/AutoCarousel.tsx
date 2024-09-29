import { FC, useEffect, useRef, useState } from 'react';
import {
  BlockProviderProps,
  Pointer,
  useBlockSelector,
} from '../../../../components';
import { SpinAnimationProps } from '../../type';
import { useSpinAnimationStyles } from '../SpinAnimation';
import clx from 'classnames';
import { TranslationalSpinner } from '../TranslationalSpinner';
import { CustomThemeProps } from '../../../../types';

export const AutoCarousel: FC<SpinAnimationProps> = ({
  size,
  images,
  screenSize,
  mode,
}) => {
  const [spinCount, setSpinCount] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [divWidth, setDivWidth] = useState(0);
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

  const handleResize = () => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
  };

  useEffect(() => {
    document.addEventListener('resize', handleResize);
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mode === 'edit') {
      stopInterval();
      return;
    }

    startInterval();
    return () => stopInterval();
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSpinCount((prev) => {
        return prev === images?.length - 3 ? 0 : prev + 1;
      });
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleSlideClick = (index: number) => {
    setSpinCount(index);
  };

  return (
    <div
      className={classes.spinnerContainer}
      ref={divRef}
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <div className={classes.autoCarouselComponent} />
      <div
        className={clx(classes.spinnerCarousel)}
        style={{
          gridTemplateColumns: `repeat(${images?.length},${100 / 3}%)`,
          transform: `translateX(-${spinCount * (100 / 3)}%)`,
        }}
      >
        <TranslationalSpinner
          size={size}
          divWidth={divWidth}
          translate={spinCount}
          imageArray={images}
          screenSize={screenSize}
        />
      </div>
      <div className={classes.pointerContainer}>
        <Pointer
          pointerCount={images?.length - 2}
          currentSlide={spinCount}
          onClick={handleSlideClick}
          lg={true}
        />
      </div>
    </div>
  );
};
