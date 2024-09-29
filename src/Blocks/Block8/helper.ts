import { BlogItemProps } from './types';

export const getPost = ({
  blogs,
  selectedLayout,
  getBlogCard,
  mode,
}: BlogItemProps): JSX.Element[] => {
  return blogs?.map((item, i) => {
    switch (selectedLayout) {
      case 'layout-2':
        return getBlogCard(
          item,
          i === 0 ? false : true,
          i === 0 ? 'horizontal' : 'vertical',
          i,
          mode
        );
      case 'layout-3':
      case 'layout-4':
      case 'layout-5':
        return getBlogCard(item, false, 'horizontal', i, mode);
      default:
        return getBlogCard(item, true, 'vertical', i, mode);
    }
  });
};
