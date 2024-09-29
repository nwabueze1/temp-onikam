import { calculateCropCoordinates, MediaValue } from './image';
import React from 'react';

type Options = {
  className?: string;
  screenSize?: number;
  ref?: any;
  styles?: {
    picture?: React.CSSProperties;
    img?: React.CSSProperties;
  };
  key?: any;
  classNames?: {
    picture?: string;
  };
};

export const createResponsiveImage = (image: any, options?: Options) => {
  if (!image) {
    return (
      <img
        className={options?.className}
        src={''}
        alt={''}
        ref={options?.ref}
        key={options?.key}
      />
    );
  }
  if (typeof image === 'string') image = JSON.parse(image);

  const img = image as MediaValue;

  const { desktop, mobile, tablet } = getImageSrcSets(img, options);

  return (
    <picture
      style={options?.styles?.picture}
      key={options?.key}
      className={options?.classNames?.picture}
    >
      <source
        media="(max-width:749px)"
        srcSet={mobile}
        style={{ display: 'block' }}
      />
      <source
        media="(max-width:1099px)"
        srcSet={tablet}
        style={{ display: 'block' }}
      />
      <source
        media="(min-width:1100px)"
        srcSet={desktop}
        style={{ display: 'block' }}
      />
      <img
        className={options?.className}
        src={img.src}
        alt={img.alternative_text}
        ref={options?.ref}
        style={options?.styles?.img}
        draggable={false}
      />
    </picture>
  );
};

const getImageSrcSets = (
  image: MediaValue,
  options?: Partial<Pick<Options, 'screenSize'>>
) => {
  const dolosUrl = 'https://dolos.hivedeck.com';
  const isAmpersand = image?.src?.includes('?');

  if (options?.screenSize) {
    const desktop = `${dolosUrl}/${image?.src}${
      isAmpersand ? '&tr' : '?tr'
    }=w-${options?.screenSize}${calculateCropCoordinates(
      options?.screenSize,
      image?.coordinates?.desktop
    )}`;
    const tablet = `${dolosUrl}/${image?.src}${isAmpersand ? '&tr' : '?tr'}=w-${
      options?.screenSize
    }${calculateCropCoordinates(
      options?.screenSize,
      image?.coordinates?.desktop
    )}`;
    const mobile = `${dolosUrl}/${image?.src}${isAmpersand ? '&tr' : '?tr'}=w-${
      options?.screenSize
    }${calculateCropCoordinates(
      options?.screenSize,
      image?.coordinates?.desktop
    )}`;

    return {
      desktop,
      tablet,
      mobile,
    };
  }
  const desktop = `${dolosUrl}/${image?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-1100${calculateCropCoordinates(1100, image?.coordinates?.desktop)}`;
  const tablet = `${dolosUrl}/${image?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-750${calculateCropCoordinates(750, image?.coordinates?.tablet)}`;
  const mobile = `${dolosUrl}/${image?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-450${calculateCropCoordinates(450, image?.coordinates?.mobile)}`;

  return {
    desktop,
    tablet,
    mobile,
  };
};
