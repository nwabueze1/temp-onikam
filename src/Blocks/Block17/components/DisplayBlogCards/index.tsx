import { getBlogContent } from '../../helper';
import { BlogCard } from '../../../../components';
import { useDisplayBlogCardStyles } from './syles';
import clx from 'classnames';
import { CorePostFields } from '../../../../models';

export const DisplayBlogCard = (
  clientPosts: CorePostFields[],
  type: string,
  layoutClass: string,
  loading: boolean,
  mode:"view"|"edit"
) => {
  const classes = useDisplayBlogCardStyles();

  return !loading
    ? clientPosts?.map((clientPost, index: number) => (
        <div
          key={index}
          className={clx(classes.displayBlogCard, layoutClass, loading)}
        >
          <BlogCard
            type={type}
            arrow={false}
            blogContent={getBlogContent(clientPost)}
            mode={mode}
          />
        </div>
      ))
    : null;
};
