import { useBlogCardStyles } from './styles';
import { Button } from '../Button';
import clx from 'classnames';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CustomThemeProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '..';
import { FC } from 'react';
import { BlogCardProps } from './types';

export const BlogCard: FC<BlogCardProps> = ({
  type = 'vertical',
  arrow = false,
  blogContent,
  mode,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useBlogCardStyles(mainConfig as CustomThemeProps);

  return (
    <div className={clx(classes.root, type)}>
      <div className={clx(classes.rightContainer, type)}>
        <div
          className={clx(classes.rightContainerImage, 'animate')}
          style={{
            backgroundImage: `url("${blogContent?.image?.src}")`,
          }}
        />
      </div>
      <div className={clx(classes.leftContainer, type)}>
        <p>{blogContent?.date}</p>
        <h6>{blogContent?.title}</h6>
        <p
          className="excerpt"
          dangerouslySetInnerHTML={{ __html: blogContent?.text }}
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
