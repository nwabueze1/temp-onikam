import clx from 'classnames';
import { FC } from 'react';
import { BlockProvider } from '../../components';
import { MediaValue, createResponsiveImage } from '../../helper';
import { useGetColor, useLayoutParameter } from '../../hooks';
import block20 from '../../mappings/block20';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { Card } from './components';
import { useKiamoniBlock20Styles } from './styles';
import { decodeText } from '../../helper/decodeText';

const { uuid: BLOCK_UUID } = block20;

export const KiamoniBlock20: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlock20Styles(mainConfig as CustomThemeProps);
  const { layoutClass } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);

  const hasBackgroundImage = ['layout_2', 'layout_3', 'layout_4'].includes(
    layoutClass as string
  );

  const renderCardComponents = () => {
    return content?.cards?.map(
      (
        item: { image: MediaValue; name: string; role: string },
        index: number
      ) => (
        <div
          key={index}
          className={clx(classes.cardCarousel, layoutClass)}
          data-info={'card'}
        >
          <Card
            image={item?.image}
            type={layoutClass === 'layout_4' ? 'circular' : 'regular'}
            name={item?.name}
            role={item?.role}
            mode={mode}
          />
        </div>
      )
    );
  };

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(
          classes.root,
          layoutClass,
          mode === 'edit' &&
            activeElement === key &&
            classes.block20ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <div className={classes.header}>
            <h1 className={classes.headerText}>
              {decodeText(content?.text?.title)}
            </h1>
            {layoutClass !== 'layout_2' && (
              <p className={clx(classes.headerSubText, layoutClass)}>
                {decodeText(content?.text?.subTitle)}
              </p>
            )}
          </div>
          {!hasBackgroundImage && (
            <article className={clx(classes.groupImageContainer, layoutClass)}>
              <div className={clx(classes.imageBackgroundColor, layoutClass)} />
              {createResponsiveImage(content?.image, {
                className: clx(classes.groupImage5, layoutClass),
                styles: {
                  picture: {
                    display: 'flex',
                  },
                },
              })}
            </article>
          )}
          <div className={classes.cardComponentContainer}>
            <div className={clx(classes.cardBackground, layoutClass)} />
            {hasBackgroundImage && (
              <div className={clx(classes.cardContainer, layoutClass)}>
                {renderCardComponents()}
              </div>
            )}{' '}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
