import { MediaValue } from '../../../../helper';
import { MenuConfigType } from '../OptionConfigCards';

export type AddToCartDialogProps = {
  position: 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight';
  onClose: () => void;
  open: boolean;
  dishDetails: { name: string; image: MediaValue; total: string };
  getOptionsConfig: MenuConfigType[];
  isSuccess: boolean;
  mode: 'view' | 'edit';
};
