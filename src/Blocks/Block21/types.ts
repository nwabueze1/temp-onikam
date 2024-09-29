export type RenderLinkProps = {
  url?: string;
  name?: string;
  text?: string;
  address?: string;
  icon?: string;
  links?: {
    icon?: string;
    text?: string;
  }[];
};
export type NotificationStateType = {
  open: boolean;
  message_type: 'success' | 'error' | null;
  message?: string | null;
};
