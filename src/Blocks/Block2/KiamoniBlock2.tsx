import clx from 'classnames';
import { BlockProvider } from '../../components';
import { InstagramCarousel } from '../../components/InstagramCarousel';
import { createResponsiveImage } from '../../helper';
import { useGetColor } from '../../hooks/useGetColor';
import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import block2 from '../../mappings/block2';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock2Styles } from './styles';

const { uuid: BLOCK_UUID } = block2;

export const KiamoniBlock2 = ({
  content,
  layouts,
  configuration,
  uuid,
}: KiamoniPropType) => {
  const { selectedLayout, layoutClass, sm, lg } = useLayoutParameter(layouts);
  let instagramImages = content?.images;
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlock2Styles(mainConfig);

  const slidesCount = sm ? 2 : lg ? 3 : 4;
  const islayout1 = !['layout-2', 'layout-3', 'layout-4'].includes(
    selectedLayout as string
  );

  return (
    <BlockProvider
      mainConfig={mainConfig}
      data-uuid={uuid}
      block_uuid={BLOCK_UUID}
    >
      <section className={classes.root}>
        <div className={clx(classes.container, layoutClass)}>
          <div className={classes.headingWrapper}>
            <h1 className={clx(classes.heading, layoutClass)}>
              {content?.text?.heading}
              {selectedLayout === 'layout-3' && <p>#yummyfood</p>}
            </h1>
            {islayout1 && (
              <img
                className={classes.headerImg}
                src={
                  'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+18.svg'
                }
              />
            )}
            {['layout-2', 'layout-4'].includes(selectedLayout as string) && (
              <p className={clx(classes.content, layoutClass)}>
                {content?.text?.description}
              </p>
            )}
          </div>
          {selectedLayout !== 'layout-4' ? (
            <div className={clx(classes.instagramImg, layoutClass)}>
              {instagramImages?.map(
                (data: { image: { src: string } }, index: number) =>
                  createResponsiveImage(data?.image, {
                    className: classes.instagramImgs,
                    key: index,
                  })
              )}
            </div>
          ) : (
            <InstagramCarousel
              images={content?.images}
              itemsPerSlide={slidesCount}
              intervals={5000}
            >
              <div className={classes.instagramTag}>
                <p>@{content?.text?.brandName} on Instagram</p>
              </div>
            </InstagramCarousel>
          )}
          {selectedLayout === 'layout-5' && (
            <div className={classes.instagramContent}>
              <p>
                Follow us on <span> Instagram</span>
              </p>
              <p className={classes.kiamoniBrandName}>
                @{content?.text?.brandName}
              </p>
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
