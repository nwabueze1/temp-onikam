import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlockStyles4 } from '.';
import clx from 'classnames';
import { useGetColor } from '../../hooks/useGetColor';
import { MediaValue, createResponsiveImage } from '../../helper';
import { decodeText } from '../../helper/decodeText';

export const KiamoniBlock4 = ({
  mode = 'view',
  content,
  layouts,
  configuration,
  index,
  handleSelect,
  activeElement,
  uuid,
  screenSize,
}: KiamoniPropType) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const classes = useKiamoniBlockStyles4(mainConfig);
  const key = 'blocks.' + String(index);

  const { layoutClass } = useLayoutParameter(layouts);

  const renderHeader = () => (
    <header className={clx(classes.header, layoutClass)}>
      <h1>{decodeText(content?.text?.title)}</h1>
      <p>{decodeText(content?.text?.subTitle)}</p>
    </header>
  );

  const renderCards = () =>
    content?.cards?.map(
      (
        item: {
          image: MediaValue;
          title: string;
          subtitle: string;
        },
        i: number
      ) => (
        <div
          key={i}
          className={clx(classes.contentWrapper, layoutClass)}
          data-info={'card'}
        >
          <div>
            <h4>{decodeText(item?.title)}</h4>
            {createResponsiveImage(item?.image, { screenSize })}
          </div>
          <p>{decodeText(item?.subtitle)}</p>
        </div>
      )
    );

  const renderLayoutA = () => (
    <div className={clx(classes.layoutABase, layoutClass ?? 'layout_1')}>
      {renderHeader()}
      <div className={clx(classes.cardsContainer, layoutClass ?? 'layout_1')}>
        {renderCards()}
      </div>
    </div>
  );

  const renderLayoutB = () => (
    <div className={classes.layoutBBase}>
      {renderHeader()}
      {renderCards()}
    </div>
  );

  const renderBlock = () =>
    layoutClass === 'layout_4' ? renderLayoutB() : renderLayoutA();

  return (
    <section
      className={clx(
        classes.root,
        mode === 'edit' && activeElement === key && classes.block4ActiveElement
      )}
      onClick={() => {
        handleSelect?.(key);
      }}
      data-uuid={uuid}
    >
      <div className={classes.container}>{renderBlock()}</div>
    </section>
  );
};
