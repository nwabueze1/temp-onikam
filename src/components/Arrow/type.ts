import { ReactNode } from "react";

export type ArrowProps = {
    hasArrow?: boolean;
    onNextClick?: () => void;
    onPrevClick?: () => void;
    hideNextButton?: boolean;
    hidePrevButton?: boolean;
    children?: ReactNode;
    arrowWidth?: number;
  };
  