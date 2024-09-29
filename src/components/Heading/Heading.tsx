import { decodeText } from '../../helper/decodeText';
import { HeadingProps } from './type';
import clx from 'classnames';
import { FC } from 'react';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';

export const Heading: FC<HeadingProps> = ({
  heading,
  subHeading,
  layoutClass,
  image,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);

  return (
    <div className={clx(layoutClass, 'getHeader')}>
      <h1>{decodeText(heading)}</h1>
      {subHeading && <p>{decodeText(subHeading)}</p>}
      {image && (
        <img
          src={getImageSvg(
            mainConfig?.colors?.[500],
            mainConfig?.colors?.[400]
          )}
        />
      )}
    </div>
  );
};

const getImageSvg = (color1 = 'red', color2 = 'white') => {
  const imageSvg = `<svg width="324" height="64" viewBox="0 0 324 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.992188 45.5001C36.9922 27.0001 180.992 -15.4999 322.992 15.0001" stroke="url(#paint0_linear_836_34082)" stroke-width="2" stroke-linecap="round"/>
<path d="M2.69576 62.2394C37.4043 41.4171 178.305 -10.4399 322.001 10.6769" stroke="url(#paint1_linear_836_34082)" stroke-width="2" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_836_34082" x1="0.992187" y1="45.5001" x2="322.992" y2="45.5001" gradientUnits="userSpaceOnUse">
<stop stop-color="${color1}"/>
<stop offset="1" stop-color="${color2}"/>
</linearGradient>
<linearGradient id="paint1_linear_836_34082" x1="2.69576" y1="62.2394" x2="324.002" y2="41.1112" gradientUnits="userSpaceOnUse">
<stop stop-color="${color1}"/>
<stop offset="1" stop-color="${color2}"/>
</linearGradient>
</defs>
</svg>`;

  return `data:image/svg+xml;base64,${btoa(imageSvg)}`;
};
