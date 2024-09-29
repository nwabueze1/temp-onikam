import { ClassNameMap } from '@mui/material';

export type DisplayLinkProps = {
  content: { [key: string]: any };
  classes: ClassNameMap;
  path?: string;
  mode: string;
};

export type OtherLinksProps= {
  url: string;
  text: string;
};
