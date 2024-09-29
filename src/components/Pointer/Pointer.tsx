import { PointerProps } from './types';
import { FC } from 'react';
import { usePointerStyles } from './styles';

export const Pointer: FC<PointerProps> = ({
  pointerCount,
  currentSlide,
  onClick,
  lg,
}) => {
  const classes = usePointerStyles();
  return lg ? (
    <div className={classes.pointers}>
      {Array(pointerCount && pointerCount > 0 ? pointerCount : 0)
        ?.fill(0)
        ?.map((_, i) => {
          return i !== currentSlide ? (
            <img
              key={i}
              src={
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Ellipse+7.svg'
              }
              onClick={() => onClick(i)}
              className={classes.pointerImg}
            />
          ) : (
            <img
              key={i}
              src={
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+8.svg'
              }
              onClick={() => onClick(i)}
              className={classes.pointerImgActive}
            />
          );
        })}
    </div>
  ) : null;
};
