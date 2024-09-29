export type TScreen = 'desktop' | 'tablet' | 'mobile';

export type TCoordinates = Record<TScreen, any>;

export type MediaValue = {
  name?: string;
  description?: string;
  alternative_text?: string;
  caption?: string;
  src: string;
  coordinates?: TCoordinates;
};

export const imageSizes =
  '(min-width: 1024px) 1100px, (min-width: 500px) 750px, 450px';

export const createImageSrcset = (value: MediaValue, isBackground = false) => {
  if (!value) return '';

  const dolosUrl = 'https://img.wazobia.tech';
  const isAmpersand = value?.src?.includes('?');
  const image3x = `${dolosUrl}/${value?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-1100${calculateCropCoordinates(1100, value?.coordinates?.desktop)}`;
  const image2x = `${dolosUrl}/${value?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-750${calculateCropCoordinates(750, value?.coordinates?.tablet)}`;
  const image1x = `${dolosUrl}/${value?.src}${
    isAmpersand ? '&tr' : '?tr'
  }=w-450${calculateCropCoordinates(450, value?.coordinates?.mobile)}`;

  if (!isBackground)
    return `${image3x} 1100w, ${image2x} 750w, ${image1x} 450w`;

  return `url("${image1x}") 1x, url("${image2x}") 2x, url("${image3x}") 3x`;
};

export const calculateCropCoordinates = (
  imageWidth: number,
  coordinates?: Record<'left' | 'top' | 'right' | 'bottom', number>
) => {
  if (!coordinates) return '';

  const left = Math.round(imageWidth * coordinates['left']);
  const top = Math.round(imageWidth * coordinates['top']);
  const right = Math.round(imageWidth * coordinates['right']);
  const bottom = Math.round(imageWidth * coordinates['bottom']);

  return `,cr-${left}.${top}.${right}.${bottom}`;
};
