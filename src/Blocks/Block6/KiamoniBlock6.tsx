import { useGetColor } from '../../hooks/useGetColor';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock6styles } from '.';
import clx from 'classnames';
import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import { useKiamoniBlock2Styles } from '../Block2';
import { Button } from '../../components/Button';
import { BlockProvider, Carousel } from '../../components';
import { useState, useEffect, FC, useRef } from 'react';
import { FeatureCard } from '../../components/FeatureCard';
import { getCurrency } from '../../helper';
import { CoreMenuItemFields } from '../../models';
import block6 from '../../mappings/block6';
import { decodeText } from '../../helper/decodeText';
import { Arrow } from '../../components/Arrow';
import { computeResponsive } from '../../hooks/computeResponsive';

const { uuid: BLOCK_UUID } = block6;

export const KiamoniBlock6: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}: KiamoniPropType) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classesHeader = useKiamoniBlock2Styles(mainConfig);
  const classes = useKiamoniBlock6styles(mainConfig);
  const { layoutClass, selectedLayout } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number>(0);
  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { md } = computeResponsive(parentWidth);

  const contentDishes = content?.menu_items;

  const layoutArray = ['layout-3', 'layout-4'];

  const handleClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      carouselRef.current?.prev();
    } else if (direction === 'next') {
      carouselRef.current?.next();
    }
  };

  const getHeader = (header: string, src: string) => {
    return (
      <div className={clx(classes.headerContainer, layoutClass)}>
        <h1 className={classesHeader.heading}>{decodeText(header)}</h1>
        {['layout-1', 'layout-2'].includes(selectedLayout as string) && (
          <img className={classesHeader.headerImg} src={src} />
        )}
      </div>
    );
  };

  const getDishes = () => {
    return contentDishes?.map((item: CoreMenuItemFields, i: number) => {
      return (
        <FeatureCard
          rating={5}
          key={i}
          dish={item?.image}
          price={item?.price}
          dishName={item?.name}
          favorite={true}
          link={item?.slug}
          mode={mode}
          currency={getCurrency(
            item?.menu?.restaurant?.bank_info?.currency ?? ''
          )}
          className="cardBorder"
        />
      );
    });
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
            classes.block6ActiveElement
        )}
        ref={parentRef}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.headerWrapper, layoutClass)}>
            {getHeader(
              content?.text?.heading,
              getImageSvg(mainConfig?.colors?.[500], mainConfig?.colors?.[400])
            )}
            {selectedLayout === 'layout-2' && md && (
              <div className={classes.arrowWrapper}>
                <Arrow
                  onNextClick={() => handleClick('next')}
                  onPrevClick={() => handleClick('prev')}
                  arrowWidth={100}
                />
              </div>
            )}
          </div>
          {layoutArray.includes(selectedLayout as string) ? (
            <div
              className={clx(classes.dishesWrapper, layoutClass, 'cardDisplay')}
            >
              {getDishes()}
            </div>
          ) : (
            <div className={clx('cardDisplay')}>
              <Carousel>{getDishes()}</Carousel>
            </div>
          )}
          {layoutArray.includes(selectedLayout as string) &&
            content?.buttons?.map(
              (button: { text: string; url: string }, index: number) => (
                <div
                  key={index}
                  className={clx(classes.buttonContainer, layoutClass)}
                >
                  <Button type="tertiary" destination={button?.url} mode={mode}>
                    <p>{button?.text}</p>
                  </Button>
                </div>
              )
            )}
        </div>
      </section>
    </BlockProvider>
  );
};

const getImageSvg = (color1 = 'red', color2 = 'white') => {
  const imageSvg = `<svg width="324" height="64" viewBox="0 0 324 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.992188 45.5001C36.9922 27.0001 180.992 -15.4999 322.992 15.0001" stroke="url(#paint0_linear_836_34082)" stroke-width="2" stroke-linecap="round"/>
<path d="M2.69576 62.2394C37.4043 41.4171 178.305 -10.4399 322.001 10.6769" stroke="url(#paint1_linear_836_34082)" stroke-width="2" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_836_34082" x1="0.992187" y1="45.5001" x2="322.992" y2="45.5001" gradientUnits="userSpaceOnUse">
<stop stop-color="${color1}"/>
<stop offset="1" stop-color="${color2}"/>
</linearGradient>
<linearGradient id="paint1_linear_836_34082" x1="2.69576" y1="62.2394" x2="324.002" y2="41.1112" gradientUnits="userSpaceOnUse">
<stop stop-color="${color1}"/>
<stop offset="1" stop-color="${color2}"/>
</linearGradient>
</defs>
</svg>`;

  return `data:image/svg+xml;base64,${btoa(imageSvg)}`;
};
