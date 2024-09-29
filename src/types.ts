import { FC } from 'react';

export type KiamoniPropType = {
  uuid?: string;
  index?: number;
  mode?: 'view' | 'edit';
  activeElement?: string;
  handleSelect?: (key: string) => void;
  isSsr?: boolean;
  content: {
    [key: string]: any;
  };
  ssr_network_operation?: string;
  ssr_content_fields?: string[];
  layouts?: {
    name: string;
    isSelected: boolean;
    content?: { [key: string]: any };
  }[];
  animations?: {
    name: string;
    isSelected: boolean;
  }[];
  configuration?: {
    colors?: { [key: string]: { [key: string]: string } };
    fonts?: { [key: string]: string };
  };
  imageCropper?: TImageCropper;
  screenSize?: number;
};

export type KiamoniTemplateType = {
  name: string;
  component: FC<KiamoniPropType>;
  props: KiamoniPropType;
};

export type CustomThemeProps = {
  colors: {
    [key: string]: any;
  };
  fonts: { [key: string]: string };
};

export type KiamoniPageProps = {
  name: string;
  pages: string[];
};

export type TCropper = Record<'defaultSize' | 'height' | 'width', number>;
export type TImageCropper = Record<'desktop' | 'tablet' | 'mobile', TCropper>;
