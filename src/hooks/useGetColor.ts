import { KiamoniState } from '../components';
import { useSelector } from 'react-redux';
import { CustomThemeProps, KiamoniPropType } from '../types';

export const useGetColor = (configuration: CustomThemeProps, type: string) => {
  const { colors } = useSelector<KiamoniState, KiamoniState>((store) => store);
  const getFonts = useGetFonts();

  const getGlobalColor = (color: string) => {
    if (!colors) return '';
    if (color.startsWith('#')) return color;
    const splitted = color.split('.');
    return colors[splitted[0]][splitted[1]];
  };
  const getMappedColor = (
    colors: Record<string, string>
  ): Record<string, string> => {
    const hexColors: Record<string, string> = {};
    for (const [key, value] of Object.entries(colors)) {
      hexColors[key] = getGlobalColor(value) as string;
    }
    return hexColors;
  };
  const styleConfig = {
    colors: getMappedColor(configuration?.colors?.[type]),
    fonts: getFonts(configuration),
  };
  return styleConfig;
};


export const useGetFonts = () => {
  const { fonts } = useSelector<KiamoniState, KiamoniState>((store) => store);

  return (configuration: KiamoniPropType["configuration"]) => {
    if (!fonts || !configuration?.fonts) return {};

    const parsedFonts: { [key: string]: string } = {};

    Object.entries(configuration?.fonts).map(([key, value]) => {
      let font: string;

      if (!value.includes("font")) font = value;
      else {
        const [, fontKey] = value.split(".");
        font = fonts[fontKey];
      }

      parsedFonts[key] = font;
    });

    return parsedFonts;
  };
};
