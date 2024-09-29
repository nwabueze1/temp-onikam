import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { FC } from 'react';
import { CustomThemeProps } from '../../../../types';
import { useRelatedCard } from './styles';
import { RelatedCardprops } from '../../type';
import { CorePostFields_relatedPost } from '../../../../models';
import { useRecordLinkClick } from '../../../../helper';

export const RelatedCards: FC<RelatedCardprops> = ({
  header,
  content,
  mode,
}) => {
  const { mainConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useRelatedCard(mainConfig as CustomThemeProps);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  function getRelatedCards(content: CorePostFields_relatedPost[]) {
    return content?.map((item, index: number) => (
      <a
        href={mode === 'view' ? item?.slug : undefined}
        key={index}
        data-info={'related-cards'}
        onClick={() => handleClick(item?.title, item?.slug)}
      >
        <div className={classes.cardContent}>
          <div className={classes.leftSideContainer}>
            {item?.featured_image?.src && (
              <div
                style={{
                  backgroundImage: `url('${item?.featured_image?.src}')`,
                }}
                className={classes.backgroundImage}
              />
            )}
          </div>
          <div className={classes.rightSideContainer}>
            <div className={classes.title}>{item?.title}</div>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: item?.content }}
            />
          </div>
        </div>
        <div className={classes.bottomLine} />
      </a>
    ));
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerHeader}>{header}</div>
        {content?.length > 0 ? (
          getRelatedCards(content)
        ) : (
          <div className={classes.noPost}>No Related Post</div>
        )}
      </div>
    </div>
  );
};
