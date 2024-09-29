import React from 'react';
import { useCarouselStyle } from './style';

export const Carousel = (props: React.PropsWithChildren) => {
  const classes = useCarouselStyle();

  return <div className={classes.container}>{props?.children}</div>;
};
