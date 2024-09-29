export type ExploreCardProps = {
  type?: 'image' | 'dark' | 'none' | 'mixed';
  button?: boolean;
  animate?: boolean;
  layoutClass: string;
  cardItem: cardItemProps;
  mode: "view"|"edit"
};

export type cardItemProps = {
  title: string;
  description: string;
  image?: any | undefined;
  uuid: string;
};
