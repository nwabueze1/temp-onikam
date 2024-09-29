import clx from 'classnames';
import { FC } from 'react';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { capitalizeEveryWord, useRecordLinkClick } from '../../../../helper';
import { CustomThemeProps } from '../../../../types';
import { useHeaderComponentStyles } from './styles';
import { useCalculateMinutesRead } from '../../hooks';

export const HeaderComponent: FC<any> = ({ content, layoutClass, mode }) => {
  const { mainConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useHeaderComponentStyles(mainConfig as CustomThemeProps);
  const image = content?.image;
  const image_source = image?.source?.includes('unsplash')
    ? 'Unsplash'
    : 'Pexels';

  const recordLinkClick = useRecordLinkClick();
  const calculateMinutesRead = useCalculateMinutesRead();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  return (
    <section className={classes.root}>
      <div className={clx(classes.container, layoutClass)}>
        <div className={clx(classes.header, layoutClass)}>
          <div className={clx(classes.headerTitle, layoutClass)}>
            {content?.title}
          </div>
          <div className={clx(classes.headerDetails, layoutClass)}>
            <span className={classes.headerdetailsAuthor}>
              By :
              {content?.author_image ? (
                <span className={classes.authorImageContainer}>
                  <img
                    className={classes.authorImage}
                    src={content?.author_image}
                    alt="user profile avatar"
                  />
                </span>
              ) : (
                ' '
              )}
              {capitalizeEveryWord(content?.author_name)}
            </span>
            <span className={classes.headerDetailsRead}>
              {calculateMinutesRead(content?.content)}
            </span>
            <span className={classes.headerDetailsDate}>{content?.date}</span>
            <span className={classes.headerDetailsComment}>
              {capitalizeEveryWord(content?.category_name)}
            </span>
          </div>
        </div>
        <div className={clx(classes.headerImageContainer, layoutClass)}>
          {content?.image?.src && (
            <div
              style={{ backgroundImage: `url('${content?.image?.src}')` }}
              className={clx(classes.headerImage, layoutClass)}
            />
          )}
          {image?.photographer && image?.source && (
            <p className={classes.featuredImageAttribution}>
              <em>
                Photo by{' '}
                <a
                  href={image?.photographer?.url}
                  target="_blank"
                  onClick={() =>
                    handleClick(
                      image?.photographer?.name,
                      image?.photographer?.url
                    )
                  }
                >
                  {image?.photographer?.name}
                </a>{' '}
                on{' '}
                <a
                  href={image?.source}
                  target="_blank"
                  onClick={() => handleClick(image_source, image?.source)}
                >
                  {image_source}
                </a>
              </em>
            </p>
          )}
        </div>
        <div className={clx(classes.overlay, layoutClass)} />
      </div>
    </section>
  );
};
