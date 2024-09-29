import { MediaValue } from '../../../../helper';

export type BlockCardsTypes = {
  layoutClass: string | undefined;
  blockKey: string;
  handleSelect: ((key: string) => void) | undefined;
  activeElement: string | undefined;
  mode: string;
  content: any;
  screenSize?: number;  
};

export type BlockData = {
  description: string;
  title: string;
  image: MediaValue;
};
