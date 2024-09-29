import { CustomThemeProps, KiamoniPropType } from '../../types';
import { ExploreCard } from './';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { useKiamoniBlock10Styles } from './styles';
import clx from 'classnames';
import { cardsLayout, cardType } from './helper';
import { BlockProvider, Heading } from '../../components';
import { FC } from 'react';
import { TCategory } from './type';
import block10 from '../../mappings/block10';

const { uuid: BLOCK_UUID } = block10;

export const KiamoniBlock10: FC<KiamoniPropType> = ({
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
  const classes = useKiamoniBlock10Styles(mainConfig as CustomThemeProps);
  const { layoutClass, xmd, selectedLayout, lg } = useLayoutParameter(layouts);
  const layoutArray = ['layout-4', 'layout-5'].includes(selectedLayout ?? '');
  const key = 'blocks.' + String(index);

  const cardData = content?.menu_categories;

  const renderExploreCard = () => {
    return (
      <div className={clx(classes.exploreCardContainer, layoutClass)}>
        {cardsLayout(cardData, selectedLayout as string)?.map(
          (item: TCategory, i: number) => (
            <div key={i}>
              <ExploreCard
                cardItem={item}
                layoutClass={layoutClass ?? ''}
                type={cardType(i, selectedLayout ?? '', xmd, lg)}
                animate={selectedLayout === 'layout-1' ? true : false}
                button={layoutArray ? true : false}
                mode={mode}
              />
            </div>
          )
        )}
      </div>
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
            classes.block10ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <Heading heading={content?.text?.heading} image={true} />
          </div>
          {renderExploreCard()}
        </div>
      </section>
    </BlockProvider>
  );
};
