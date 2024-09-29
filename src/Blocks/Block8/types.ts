import { CorePostFields } from '../../models';

export type BlogCardProps = {
  type: string;
  arrow: boolean;
  blogContent: { [key: string]: any };
  mode: 'view' | 'edit';
  screenSize?: number;
};

export type BlogItemProps = {
  blogs: CorePostFields[];
  selectedLayout: string;
  mode: 'view' | 'edit';
  getBlogCard: {
    (
      blogContent: { [key: string]: any },
      button: boolean,
      cardType: string,
      i: number,
      mode: 'view' | 'edit'
    ): JSX.Element;
  };
};

export type Blogprops = {
  blogContent: { [key: string]: any };
  button: boolean;
  cardType: string;
  i: number;
};
