import { useGetColor, useLayoutParameter } from '../../hooks';
import { FC } from 'react';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock13Styles } from './styles';
import { BreadCrumpLinkProps } from './types';
import clx from 'classnames';
import { createImageSrcset, imageSizes } from '../../helper';
import { decodeText } from '../../helper/decodeText';

export const KiamoniBlock13: FC<KiamoniPropType> = ({
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
  const classes = useKiamoniBlock13Styles(mainConfig as CustomThemeProps);
  const { layoutClass } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);

  const hasSubtitle = ['layout_6', 'layout_5'].includes(layoutClass as string);
  const hasBackgroundImage = [
    'layout_3',
    'layout_4',
    'layout_5',
    'layout_6',
  ].includes(layoutClass as string);

  function getHeaderLinks() {
    return (
      <div className={classes.subHeader}>
        {content?.links?.map?.((link: BreadCrumpLinkProps, index: number) => (
          <p className={classes.links} key={index}>
            {link?.text}
            {index < content?.links?.length - 1 && (
              <span className={classes.separatingIcon}>&gt;</span>
            )}
          </p>
        ))}
      </div>
    );
  }

  return (
    <section
      className={clx(
        classes.root,
        layoutClass,
        mode === 'edit' && activeElement === key && classes.block13ActiveElement
      )}
      onClick={() => {
        handleSelect?.(key);
      }}
      data-uuid={uuid}
    >
      <div className={classes.container}>
        <h1 className={classes.header}>{decodeText(content?.text?.title)}</h1>
        {getHeaderLinks()}
        {hasSubtitle && (
          <div className={classes.subTitle}>{content?.text?.subTitle}</div>
        )}
      </div>
      {hasBackgroundImage && (
        <div className={classes.backgroundImage}>
          <img
            src={content?.image?.src}
            srcSet={createImageSrcset(content?.image)}
            sizes={imageSizes}
            alt={content?.image?.alternative_text}
          />
        </div>
      )}
    </section>
  );
};
