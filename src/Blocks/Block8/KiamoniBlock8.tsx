import { useGetColor } from '../../hooks/useGetColor';
import { KiamoniBLock8Styles } from '.';
import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import clx from 'classnames';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { FC } from 'react';
import { Button } from '../../components/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BlockProvider, Carousel, Heading } from '../../components';
import { getPost } from './helper';
import { Blog } from './components';
import { useResponsive } from '../../hooks/useResponsive';
import { useMediaQuery, useTheme } from '@mui/material';
import block8 from '../../mappings/block8';

const { uuid: BLOCK_UUID } = block8;

export const KiamoniBlock8: FC<KiamoniPropType> = ({
  mode = 'view',
  configuration,
  layouts,
  content,
  index,
  handleSelect,
  activeElement,
  uuid,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = KiamoniBLock8Styles(mainConfig);
  const { layoutClass, selectedLayout } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const { sm } = useResponsive();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('md'));
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  const hasNoCarousel =
    ('layout-2' === selectedLayout && !sm) || 'layout-3' === selectedLayout;

  const getBlogCard = Blog(layoutClass, mode, { screenSize });

  const renderButtons = () => {
    return content?.buttons?.map(
      (button: { url: string; text: string }, index: number) => (
        <div key={index} className={clx(classes.buttonContainer, layoutClass)}>
          <Button type={'tertiary'} destination={button?.url} mode={mode}>
            <p className={classes.buttonText}>
              {button?.text}
              {<AiOutlineArrowRight className={classes.buttonArrow} />}
            </p>
          </Button>
        </div>
      )
    );
  };

  const renderPostCards = getPost({
    blogs: content?.posts,
    selectedLayout: selectedLayout as string,
    getBlogCard,
    mode,
  });

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
            classes.block8ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.headerContainer, layoutClass)}>
            <Heading
              heading={content?.text?.heading}
              subHeading={content?.text?.subHeading}
              layoutClass={layoutClass}
              image={true}
            />
          </div>
          {hasNoCarousel ? (
            <div className={clx(classes.block, selectedLayout)}>
              {renderPostCards}
            </div>
          ) : (
            <div className={classes.carouselWrapper}>
              {(['layout-1', 'layout-4'].includes(selectedLayout ?? '') ||
                !lg) &&
              !small ? (
                <div>
                  <Carousel>{renderPostCards}</Carousel>
                </div>
              ) : (
                <Carousel>{renderPostCards}</Carousel>
              )}
            </div>
          )}
          {renderButtons()}
        </div>
      </section>
    </BlockProvider>
  );
};
