import { ReactNode } from 'react';

export type InstagramCarouselProps = {
  images?: { image: { src: string } }[];
  itemsPerSlide?: number;
  children?: ReactNode;
  intervals?: number;
};
