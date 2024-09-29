import { CustomThemeProps, KiamoniPropType } from '../../types';
import { FC } from 'react';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { BlockProvider } from '../../components';
import { BlockCards } from './components';
import { useKiamoniBlock16Styles } from './styles';
import clx from 'classnames';
import block16 from '../../mappings/block16';

const { uuid: BLOCK_UUID } = block16;

export const KiamoniBlock16: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
  screenSize,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const { layoutClass } = useLayoutParameter(layouts);
  const key = 'blocks.' + String(index);
  const classes = useKiamoniBlock16Styles(mainConfig);

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={BLOCK_UUID}>
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block16ActiveElement,
          layoutClass
        )}
        data-uuid={uuid}
      >
        <BlockCards
          screenSize={screenSize}
          layoutClass={layoutClass}
          blockKey={key}
          mode={mode}
          handleSelect={handleSelect}
          activeElement={activeElement}
          content={content?.cards}
        />
      </section>
    </BlockProvider>
  );
};
