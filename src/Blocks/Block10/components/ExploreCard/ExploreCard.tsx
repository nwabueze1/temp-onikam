import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { useExploreCardStyles } from './';
import clx from 'classnames';
import { ExploreCardProps } from './type';
import { FC } from 'react';
import { useRecordLinkClick } from '../../../../helper';
import { decodeText } from '../../../../helper/decodeText';

export const ExploreCard: FC<ExploreCardProps> = ({
  type,
  animate,
  layoutClass,
  cardItem,
  mode,
}) => {
  const { mainConfig, block_uuid } = useBlockSelector(
    (state: BlockProviderProps) => state
  );
  const classes = useExploreCardStyles(mainConfig as CustomThemeProps);

  const recordLinkClick = useRecordLinkClick();

  const handleClick = (text?: string, href?: string) => {
    mode === 'view' && recordLinkClick(text ?? '', href ?? '', block_uuid);
  };

  return (
    <div className={classes.container}>
      <div
        className={clx(classes.cardContainer, type, { animate }, layoutClass)}
        onClick={() => handleClick(cardItem?.title, cardItem?.uuid)}
      >
        {type !== 'image' && (
          <div
            className={clx(
              classes.textContainer,
              { animate },
              type,
              layoutClass
            )}
          >
            <h4 className={clx(classes.cardHeaderText, { animate })}>
              {decodeText(cardItem?.title)}
            </h4>
            <p className={clx(classes.cardSubtext, type, 'whiteText')}>
              {decodeText(cardItem?.description)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
