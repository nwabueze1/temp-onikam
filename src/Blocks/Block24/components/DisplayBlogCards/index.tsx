import { getBlogContent } from '../../helper';
import { BlogCard } from '../../../../components';
import { useDisplayBlogCardStyles } from './syles';
import clx from 'classnames';
import { CorePostFields } from '../../../../models';

export const DisplayBlogCard = (
  posts: CorePostFields[],
  type: string,
  layoutClass: string,
  mode: 'view' | 'edit'
) => {
  const classes = useDisplayBlogCardStyles();

  return posts?.map((clientPost, index: number) => (
    <div key={index} className={clx(classes.displayBlogCard, layoutClass)}>
      <BlogCard
        type={type}
        arrow={false}
        blogContent={getBlogContent(clientPost)}
        mode={mode}
      />
    </div>
  ));
};
