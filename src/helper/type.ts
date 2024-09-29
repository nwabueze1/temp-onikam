import { ClassNameMap } from '@mui/material';

export type DisplayLinkProps = {
  content: { [key: string]: any };
  classes: ClassNameMap;
  path?: string;
};
export type NotificationType = {
  open: boolean;
  message: null | string;
  message_type: null | 'error' | 'success';
};
