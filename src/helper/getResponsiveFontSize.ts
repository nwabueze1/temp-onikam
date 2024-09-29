export const getResponsiveFontSize = (
  minFontSize: number,
  maxFontSize: number
) => {
  const minWidth = 250; // Set your minimum viewport width
  const maxWidth = 1720; // Set your maximum viewport width

  return `calc(${minFontSize}px + ${
    maxFontSize - minFontSize
  } * (100vw - ${minWidth}px) / ${maxWidth - minWidth})`;
};
