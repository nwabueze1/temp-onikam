import clx from 'classnames';
import { FC } from 'react';
import { BlockProvider } from '../../components';
import { createResponsiveImage } from '../../helper';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { GetForm } from './extra';
import { Links, Schedules } from './comp';
import {
  renderSocialMedia,
  TSocialMediaButton,
} from './comp/RenderSocialMedia';
import { useBlock3Styles } from './styles';
import block3 from '../../mappings/block3';

const { uuid: BLOCK_UUID } = block3;

export const KiamoniBlock3: FC<KiamoniPropType> = ({
  content,
  layouts,
  configuration,
  mode = 'view',
  activeElement,
  index,
  handleSelect,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useBlock3Styles(mainConfig as CustomThemeProps);
  const { selectedLayout: layout } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);

  const renderFooterLink = (
    footerLink: { name: string; links: { text: string; url: string }[] },
    index: number
  ) => (
    <Links
      {...footerLink}
      key={index}
      mode={mode}
      className={clx(classes.footerLink, index === 0 && 'first', layout)}
    />
  );

  const renderFooterLinks = () => content?.footerLinks?.map(renderFooterLink);

  const renderSchedules = () => (
    <Schedules
      schedules={content?.schedules}
      className={clx(classes.scheduleContainer, layout)}
    />
  );

  const renderFooterLogo = () => {
    return (
      <div className={clx(classes.logoContainer, layout)}>
        {createResponsiveImage(content?.image, {
          className: clx(classes.logoImage, layout),
          screenSize,
        })}
        <p className={clx(classes.logoText, layout)}>{content?.text?.extra}</p>
      </div>
    );
  };

  const renderForm = () => <GetForm content={content} />;

  const showMenu = ['layout-1'].includes(layout ?? 'layout-1');

  const renderSocial = () => {
    return (
      <div className={clx(classes.socialContainer, layout)}>
        <div className={clx(classes.socialMediaIconsContainer, layout)}>
          {content?.buttons?.map((button: TSocialMediaButton, index: number) =>
            renderSocialMedia(button, index, {
              mode,
              layout: layout ?? 'layout-1',
              classes: {
                icon: classes.socialMediaIcon,
                iconContainer: classes.socialMediaIconContainer,
              },
            })
          )}
        </div>
        {showMenu && renderForm()}
      </div>
    );
  };
  const renderMenu = () => (
    <div className={classes.menuBlock}>
      <header className={classes.menuHeader}>
        <h6 className={classes.menuTitle}>{content?.text?.main}</h6>
        <p className={classes.menuSubtitle}>{content?.text?.body}</p>
      </header>
      <div>{renderForm()}</div>
    </div>
  );

  const renderLayoutA = () => (
    <div className={classes.base}>
      {[
        renderFooterLogo(),
        renderFooterLinks(),
        renderSchedules(),
        renderSocial(),
      ]}
    </div>
  );

  const renderLayoutB = () => {
    return (
      <div className={classes.baseB}>
        {[
          renderFooterLogo(),
          renderFooterLinks(),
          <div className={classes.socialBContainer} key={3}>
            {[
              renderSocial(),
              layout === 'layout-3' ? renderForm() : null,
              renderSchedules(),
            ]}
          </div>,
        ]}
      </div>
    );
  };

  const getLayout = () =>
    [3, 4, 5].map((num) => `layout-${num}`).includes(layout as string)
      ? renderLayoutB()
      : renderLayoutA();

  return (
    <BlockProvider
      block_uuid={BLOCK_UUID}
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
    >
      <div
        data-uuid={BLOCK_UUID}
        onClick={() => handleSelect?.(key)}
        className={clx(
          mode === 'edit' && activeElement === key && classes?.baseRootActive
        )}
      >
        {!showMenu && layout !== 'layout-3' && (
          <div className={classes.menuRoot}>{renderMenu()}</div>
        )}
        <section className={classes.root}>
          <div className={classes.container}>{getLayout()}</div>
        </section>
      </div>
    </BlockProvider>
  );
};
