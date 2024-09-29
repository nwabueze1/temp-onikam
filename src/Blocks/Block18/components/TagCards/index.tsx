import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { FC } from 'react';
import { CustomThemeProps } from '../../../../types';
import { useTagCardStyles } from './styles';
import { TagCardProps } from '../../type';
import { CorePostFields_tag } from '../../../../models';
import { useRecordLinkClick } from '../../../../helper';

export const TagCards: FC<TagCardProps> = ({ header, content, mode }) => {
  const { mainConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useTagCardStyles(mainConfig as CustomThemeProps);

  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  function getTagCards(content: CorePostFields_tag[]) {
    return content?.map((item, index: number) => (
      <a
        className={classes.tags}
        href={mode === 'view' ? item?.uuid : undefined}
        key={index}
        data-info={'tag-cards'}
        onClick={() => handleClick(item?.name, item?.uuid)}
      >
        {item?.name}
      </a>
    ));
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.containerHeader}>{header}</div>
        {content?.length > 0 ? (
          getTagCards(content)
        ) : (
          <div className={classes.noTag}>No tag</div>
        )}
      </div>
    </div>
  );
};
