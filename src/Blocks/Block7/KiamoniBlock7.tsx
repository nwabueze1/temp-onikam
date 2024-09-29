import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import clx from 'classnames';
import { useKiamoniBlock7Style } from './styles';
import { useGetColor } from '../../hooks/useGetColor';
import { Button } from '../../components/Button';
import { Heading } from '../../components';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { BlockProvider } from '../../components';
import { FC, useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FeatureCard } from '../../components/FeatureCard';
import { CoreMenuItemFields } from '../../models';
import { getCurrency } from '../../helper';
import { useResponsive } from '../../hooks/useResponsive';
import block7 from '../../mappings/block7';
import { Arrow } from '../../components/Arrow';

const { uuid: BLOCK_UUID } = block7;

export const KiamoniBlock7: FC<KiamoniPropType> = ({
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
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock7Style(mainConfig);
  const { layoutClass, selectedLayout } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);
  const { md, lg, xl, sm } = useResponsive();

  const handleClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      carouselRef.current?.prev();
    } else if (direction === 'next') {
      carouselRef.current?.next();
    }
  };

  const heading = content?.text?.heading;
  const subHeading = content?.text?.subHeading;
  const buttonVariant = ['layout-3', 'layout-5'].includes(
    selectedLayout as string
  )
    ? 'tertiary'
    : 'secondary';

  const contentDishesArray =
    selectedLayout === 'layout-1' && sm
      ? content?.menu_items?.slice(0, 7)
      : selectedLayout === 'layout-1' && lg
      ? content?.menu_items?.slice(0, 8)
      : selectedLayout === 'layout-1'
      ? content?.menu_items?.slice(0, 7)
      : content?.menu_items?.slice(0, 8);

  const getDishes = (hasSearch: boolean) => {
    return contentDishesArray?.map((item: CoreMenuItemFields, i: number) => (
      <div key={i} className={'cardBorder'}>
        <FeatureCard
          rating={5}
          dish={item?.image}
          price={item?.price}
          dishName={item?.name}
          hasSearch={hasSearch}
          favorite={true}
          link={item?.slug}
          mode={mode}
          currency={getCurrency(
            item?.menu?.restaurant?.bank_info?.currency ?? ''
          )}
        />
      </div>
    ));
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block7ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <article className={clx(classes.headerWrapper, layoutClass)}>
            <Heading
              heading={heading}
              subHeading={subHeading}
              layoutClass={layoutClass}
            />
            {selectedLayout === 'layout-4' && md && (
              <div className={classes.arrowContainer}>
                <Arrow
                  onNextClick={() => handleClick('next')}
                  onPrevClick={() => handleClick('prev')}
                  arrowWidth={100}
                />
              </div>
            )}
          </article>
          <div className={classes.itemsContainer}>{getDishes(true)}</div>
          {selectedLayout === 'layout-1' ? (
            <div
              className={clx(classes.adContainer, classes.adContinerVertical)}
              style={{
                backgroundImage: `url('${content?.advert?.vertical}')`,
              }}
            />
          ) : selectedLayout === 'layout-5' ? (
            <img
              className={clx(classes.adContainer, layoutClass)}
              src={content?.advert?.horizontal}
            />
          ) : null}
          {content?.buttons?.map(
            (item: { url: string; text: string }, index: number) => (
              <div
                key={index}
                className={clx(classes.buttonContainer, layoutClass)}
              >
                {buttonVariant === 'secondary' ? (
                  <Button
                    type={buttonVariant}
                    destination={item?.url}
                    mode={mode}
                  >
                    {item?.text}
                    <AiOutlineArrowRight className={classes.buttonArrow} />
                  </Button>
                ) : (
                  <Button
                    type={buttonVariant}
                    destination={item?.url}
                    mode={mode}
                  >
                    <p className={classes.button}>
                      {item?.text}
                      <AiOutlineArrowRight className={classes.buttonArrow} />
                    </p>
                  </Button>
                )}
              </div>
            )
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
