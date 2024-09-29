import { NotificationType } from '../../helper/type';

export type PluginFormNotificationPropsType = NotificationType & {
  onClose: () => void;
  colors?: {
    background?: string;
    text?: string;
  };
};
