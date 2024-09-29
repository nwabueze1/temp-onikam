import { SpinAnimation } from './';
import { useKiamoniBlock5Styles } from './style';
import { Button } from '../../components';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { FC } from 'react';
import { BlockProvider } from '../../components';
import clx from 'classnames';
import { AutoCarousel } from './components';
import { getBackgroundImage } from './helper';
import { useButtonStyles } from './buttonStyles';
import block5 from '../../mappings/block5';
import { decodeText } from '../../helper/decodeText';

const { uuid: BLOCK_UUID } = block5;

export const KiamoniBlock5: FC<KiamoniPropType> = ({
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
  const buttonClasses = useButtonStyles();
  const classes = useKiamoniBlock5Styles(mainConfig);
  const { layoutClass, sm, selectedLayout } = useLayoutParameter(layouts);
  const isSpinCarousel = ['layout-2', 'layout-3', 'layout-4'].includes(
    selectedLayout as string
  );
  const hasPointer = ['layout-2', 'layout-3'].includes(
    selectedLayout as string
  );
  const key = 'blocks.' + String(index);

  const imageStyle = getBackgroundImage(
    mainConfig?.colors?.[600],
    mainConfig?.colors?.[700]
  );

  const images = content?.images;

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section className={classes.blockCover} data-uuid={uuid}>
        <div className={classes.backgroundCover} />
        <div
          className={clx(
            classes.root,
            layoutClass,
            mode === 'edit' &&
              activeElement === key &&
              classes.block5ActiveElement
          )}
          onClick={() => {
            handleSelect?.(key);
          }}
        >
          <div
            style={{ backgroundImage: imageStyle }}
            className={clx(classes.backgroundContainer, layoutClass)}
          ></div>
          <div className={clx(classes.spinner, layoutClass)}>
            {isSpinCarousel ? (
              <SpinAnimation
                size={sm ? 'small' : 'large'}
                hasNoPointer={hasPointer}
                images={images}
                screenSize={screenSize}
                mode={mode}
              />
            ) : (
              <AutoCarousel
                size={sm ? 'small' : 'large'}
                hasNoPointer={hasPointer}
                images={images}
                screenSize={screenSize}
                mode={mode}
              />
            )}
          </div>
          <div className={clx(classes.container, layoutClass)}>
            <div className={clx(buttonClasses.header, layoutClass)}>
              <h1 className={classes.headerText}>
                {decodeText(content?.text?.header)}
              </h1>
              <p className={clx(buttonClasses.paragraphText, layoutClass)}>
                {decodeText(content?.text?.subtext)}
              </p>
              <div className={clx(buttonClasses.heroButton, layoutClass)}>
                {content?.buttons?.map(
                  (item: { text: string; url: string }, index: number) => (
                    <div key={index}>
                      <Button type="primary" destination={item.url} mode={mode}>
                        {item?.text}
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
