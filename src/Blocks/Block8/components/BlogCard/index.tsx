import { useBlogCardStyles } from './styles';
import { Button } from '../../../../components/Button';
import clx from 'classnames';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CustomThemeProps } from '../../../../types';
import { BlogCardProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { FC } from 'react';
import { createResponsiveImage } from '../../../../helper';

export const BlogCard: FC<BlogCardProps> = ({
  type = 'vertical',
  arrow = false,
  blogContent,
  mode,
  screenSize,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useBlogCardStyles(mainConfig as CustomThemeProps);

  const getPostTitle = () => {
    return (
      <h6>
        {type === 'horizontal' ? (
          <a
            href={mode !== 'edit' ? blogContent?.slug : undefined}
            className={classes.headerLink}
          >
            {blogContent?.title}
          </a>
        ) : (
          blogContent?.title
        )}
      </h6>
    );
  };

  return (
    <div className={clx(classes.root, type)} data-info="blog-card">
      {createResponsiveImage(blogContent?.featured_image, {
        className: clx(classes.rightContainerImage, 'animate'),
        classNames: {
          picture: clx(classes.rightContainer, type),
        },
        styles: {
          picture: {
            display: 'block',
          },
        },
        screenSize,
      })}
      <div className={clx(classes.leftContainer, type)}>
        <p className={classes.dateColumn}>{blogContent?.date}</p>

        {getPostTitle()}
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: blogContent?.excerpt }}
        />
        <div className={classes.separator} />
        <div className={clx(classes.button, type)}>
          <Button type={'tertiary'} destination={blogContent?.slug} mode={mode}>
            <p className={classes.buttonText}>
              Read More
              {arrow && <AiOutlineArrowRight className={classes.buttonArrow} />}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};
