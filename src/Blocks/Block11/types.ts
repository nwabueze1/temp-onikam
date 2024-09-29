import { MediaValue } from '../../helper';

export type CarouselProps = {
  layouts: string;
  images: { image: MediaValue }[];
  clickable?: boolean;
  screenSize?: number;
};
