import { FC } from 'react';
import { BlockCardsTypes, BlockData } from './types';
import clx from 'classnames';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { useKiamoniBlock16Styles } from './styles';
import { changeLayoutClass } from './helper';
import { decodeText } from '../../../../helper/decodeText';
import { createResponsiveImage } from '../../../../helper';

export const BlockCards: FC<BlockCardsTypes> = ({
  layoutClass,
  blockKey,
  handleSelect,
  content,
  screenSize,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useKiamoniBlock16Styles(mainConfig as CustomThemeProps);

  return (
    <>
      {content?.map((data: BlockData, index: number) => (
        <article
          key={index}
          className={clx(
            classes.root,
            layoutClass,
            index !== 0 && classes.topBorderLine
          )}
          onClick={() => {
            handleSelect?.(blockKey);
          }}
          data-info="block-card"
        >
          <div
            className={clx(
              classes.container,
              changeLayoutClass(index, layoutClass)
            )}
          >
            <div
              className={clx(
                classes.leftContainer,
                changeLayoutClass(index, layoutClass)
              )}
            >
              <div
                className={clx(
                  classes.leftWrapper,
                  changeLayoutClass(index, layoutClass)
                )}
              />
              <div
                className={clx(
                  classes.rightWrapper,
                  changeLayoutClass(index, layoutClass)
                )}
              >
                {createResponsiveImage(data?.image, {
                  className: classes.image,
                  screenSize,
                  classNames: {
                    picture: classes.backgroundImage,
                  },
                  styles: {
                    picture: {
                      display: 'block',
                    },
                  },
                })}
              </div>
            </div>
            <div
              className={clx(
                classes.rightContainer,
                changeLayoutClass(index, layoutClass)
              )}
            >
              <h2 className={classes.header}>{decodeText(data?.title)}</h2>
              <p className={classes.description}>
                {decodeText(data?.description)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
