export type RenderLinkProps = {
  day?: string;
  time?: string;
  type?: string;
  url?: string;
  name?: string;
  text?: string;
  icons?: string;
  urls?: {
    url?: string;
    text?: string;
  }[];
  icon?: string;
  item?: {
    name: string;
  };
  links?: {
    icon: string;
  }[];
};
