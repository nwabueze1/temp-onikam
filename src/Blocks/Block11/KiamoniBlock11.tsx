import { BlockProvider } from '../../components';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { Slider } from '.';
import { useKiamoniBlock11Styles } from './styles';
import { FC } from 'react';
import { Carousel } from './components';
import clx from 'classnames';
import block11 from '../../mappings/block11';

const { uuid: BLOCK_UUID } = block11;

export const KiamoniBlock11: FC<KiamoniPropType> = ({
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
  const classes = useKiamoniBlock11Styles(mainConfig);
  const { layoutClass, selectedLayout } = useLayoutParameter(layouts);
  const layoutArray = ['layout-2', 'layout-3'];
  const key = 'blocks.' + String(index);

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(
          classes.root,
          layoutClass,
          mode === 'edit' &&
            activeElement === key &&
            classes.block11ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <div className={classes.carouselContainer}>
            {layoutArray.includes(selectedLayout ?? '') ? (
              <Carousel
                layouts={layoutClass ?? ''}
                screenSize={screenSize}
                images={content.images}
              />
            ) : (
              <Slider
                layouts={layoutClass ?? ''}
                images={content.images}
                clickable={selectedLayout === 'layout-4' ? false : true}
                screenSize={screenSize}
              />
            )}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
