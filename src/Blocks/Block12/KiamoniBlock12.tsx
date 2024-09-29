import { BlockProvider, Carousel } from '../../components';
import { CommentCard } from './components';
import { FC, useRef } from 'react';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { useKiamoniBlocks12Styles } from './style';
import { Veggies } from './components';
import clx from 'classnames';
import { Heading } from '../../components';
import block12 from '../../mappings/block12';
import { Arrow } from '../../components/Arrow';

const { uuid: BLOCK_UUID } = block12;

export const KiamoniBlock12: FC<KiamoniPropType> = ({
  mode = 'view',
  configuration,
  content,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlocks12Styles(mainConfig as CustomThemeProps);
  const { selectedLayout, layoutClass, xmd } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const carouselRef = useRef<{ next: () => void; prev: () => void }>(null);

  const handleClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      carouselRef.current?.prev();
    } else if (direction === 'next') {
      carouselRef.current?.next();
    }
  };
  const layoutArray = ['layout-1', 'layout-5'];
  const layoutCenter = ['layout-2', 'layout-3', 'layout-4'];

  const getCommentCard = () => {
    return content?.comments?.map(
      (item: { name: string; comment: string }, i: number) => (
        <div key={i} data-info="comment">
          <CommentCard
            name={item?.name}
            comment={item?.comment}
            double={selectedLayout === 'layout-4' && !xmd ? true : false}
            center={
              layoutCenter.includes(selectedLayout as string) ? true : false
            }
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
            classes.block12ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div
          style={{ backgroundImage: `url('${content?.image?.src}')` }}
          className={clx(classes.backgroundImageContainer)}
        />
        {layoutArray.includes(selectedLayout ?? '') && <Veggies />}
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.contentWrapper, layoutClass)}>
            <div className={clx(classes.getHeading, layoutClass)}>
              <Heading
                heading={content?.text?.title}
                subHeading={content?.text?.subtitle}
              />
            </div>
            <div className={clx(classes.commentContainer, layoutClass)}>
              <div className={clx(classes.commentCardContainer, layoutClass)}>
                <Carousel>{getCommentCard()}</Carousel>
              </div>
              <div className={clx(classes.arrowContainer, layoutClass)}>
                <Arrow
                  onNextClick={() => handleClick('next')}
                  onPrevClick={() => handleClick('prev')}
                />
              </div>
            </div>
          </div>
          {selectedLayout === 'layout-5' && !xmd && (
            <div
              style={{ backgroundImage: `url('${content?.image?.src}')` }}
              className={clx(classes.imageContainer)}
            />
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
