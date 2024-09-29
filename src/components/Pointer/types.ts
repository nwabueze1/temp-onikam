export type PointerProps = {
    pointerCount: number;
    currentSlide: number;
    onClick: (index: number) => void;
    lg: boolean;
  };