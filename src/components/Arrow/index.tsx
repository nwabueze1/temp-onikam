import clx from 'classnames';
import { CustomThemeProps } from '../../types';
import { useCarouselStyles } from './styles';
import { FC } from 'react';
import { ArrowProps } from './type';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const Arrow: FC<ArrowProps> = ({
  hasArrow = true,
  onPrevClick,
  onNextClick,
  hideNextButton,
  hidePrevButton,
  children,
  arrowWidth,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classesCarousel = useCarouselStyles(mainConfig as CustomThemeProps);

  return (
    <div
      className={clx(classesCarousel.arrowContainer, { hasArrow })}
      style={{ width: arrowWidth ? `${arrowWidth}px` : '100%' }}
    >
      <button
        onClick={onPrevClick}
        className={clx(
          classesCarousel.sliderButton,
          classesCarousel.sliderButtonRegular,
          hidePrevButton && 'hidden'
        )}
      >
        <AiOutlineArrowLeft className={classesCarousel.sliderIcon} />
      </button>
      {children}
      <button
        onClick={onNextClick}
        className={clx(
          classesCarousel.sliderButton,
          classesCarousel.sliderButtonRegular,
          hideNextButton && 'hidden'
        )}
      >
        <AiOutlineArrowRight className={classesCarousel.sliderIcon} />
      </button>
    </div>
  );
};
