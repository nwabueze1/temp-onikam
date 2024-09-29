import { BlogCard } from '../BlogCard';
import clx from 'classnames';
import { useBlogStyles } from './styles';

export const Blog = (
  layoutClass: string | undefined,
  mode: 'view' | 'edit',
  options?: { screenSize?: number }
) => {
  const classes = useBlogStyles();
  return (
    blogContent: { [key: string]: any },
    button: boolean,
    cardType: string,
    i: number
  ) => {
    return (
      <div
        key={i}
        className={clx(classes.blogCardContainer, 'blogCard', layoutClass)}
      >
        <BlogCard
          type={cardType}
          blogContent={blogContent}
          arrow={button}
          mode={mode}
          screenSize={options?.screenSize}
        />
      </div>
    );
  };
};
