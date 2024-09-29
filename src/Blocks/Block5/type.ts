import { MediaValue } from '../../helper';

export type SpinAnimationProps = {
  size: 'small' | 'large';
  hasNoPointer?: boolean;
  images: {
    image: MediaValue;
  }[];
  screenSize?: number;
  mode?: 'edit' | 'view';
};

export type AutoSpinnerProps = {
  size: string;
  divWidth: number;
  translate: number;
  imageArray: {
    image: MediaValue;
  }[];
  screenSize?: number;
};

export type SpinnerProps = {
  size: string;
  divWidth: number;
  getRotationDegree: (index: number) => number;
  rotation: number;
  duplicatedImages: {
    image: MediaValue;
  }[];
};
