import { useGetColor, useLayoutParameter } from '../../hooks';
import { FC } from 'react';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock14Styles } from './styles';
import { ServiceCard } from './components';
import clx from 'classnames';
import { BlockProvider } from '../../components';
import { CardArrayProps } from './types';
import block14 from '../../mappings/block14';
import { decodeText } from '../../helper/decodeText';

const { uuid: BLOCK_UUID } = block14;

export const KiamoniBlock14: FC<KiamoniPropType> = ({
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
  const classes = useKiamoniBlock14Styles(mainConfig as CustomThemeProps);
  const key = 'blocks.' + String(index);

  const { layoutClass } = useLayoutParameter(layouts);

  const getServiceCard = () => {
    return content?.services?.map((item: CardArrayProps, index: number) => (
      <ServiceCard
        image={item?.image}
        text={item?.text}
        header={item?.header}
        layoutClass={layoutClass}
        key={index}
      />
    ));
  };

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(
          classes.root,
          layoutClass,
          mode === 'edit' &&
            activeElement === key &&
            classes.block14ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.header, layoutClass)}>
            <h1 className={clx(classes.headerTitle, layoutClass)}>
              {decodeText(content?.text?.title)}
            </h1>
            <p className={classes.headerSubTitle}>
              {decodeText(content?.text?.subTitle)}
            </p>
          </div>
          <div className={clx(classes.serviceCard, layoutClass)}>
            {getServiceCard()}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
