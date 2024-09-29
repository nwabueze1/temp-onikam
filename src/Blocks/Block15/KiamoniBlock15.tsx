import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetColor } from '../../hooks';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import {
  BlockProvider,
  DishCard,
  Heading,
  KiamoniState,
} from '../../components';
import { useKiamoniBlock15Styles } from './styles';
import { OptionConfigCards } from './components';
import { useSelector } from 'react-redux';
import { RelatedDishes } from './components/RelatedDishes';
import clx from 'classnames';
import { useRecordMenuItemView } from '../../helper';
import block15 from '../../mappings/block15';

const { uuid: BLOCK_UUID } = block15;

export const KiamoniBlock15: FC<KiamoniPropType> = ({
  configuration,
  content,
  mode = 'view',
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const key = 'blocks.' + String(index);

  const { gatewayUrl } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const dispatch = useDispatch();
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock15Styles(mainConfig as CustomThemeProps);
  const recordMenuItemView = useRecordMenuItemView();

  useEffect(() => {
    dispatch({ type: 'GET_MENU_ITEMS', payload: [content?.menu_item] });

    recordMenuItemView(content?.menu_item?.uuid);
  }, []);

  const productData = content?.menu_item;

  const hasRelatedDishesData =
    productData?.related_menu_items &&
    productData?.related_menu_items?.length > 0;

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      gatewayUrl={gatewayUrl}
      block_uuid={BLOCK_UUID}
    >
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block15ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <DishCard hasSearch={false} mode={mode}>
              <div
                draggable={false}
                className={classes.dishCardImg}
                style={{
                  backgroundImage: `url('${productData?.image?.src}')`,
                }}
              />
            </DishCard>
          </div>
          <div className={classes.subHeader}>
            <div className={classes.subHeaderText}>
              <h1 className={classes.headerText}>{productData?.name}</h1>
              <p className={classes.subHeaderItems}>
                {productData?.description}
              </p>
            </div>
            <div className={classes.buttonDivider} />
            <div className={classes.orderContainer}>
              <OptionConfigCards clientMenuItem={productData} mode={mode} />
            </div>
            <div className={classes.bottomLine} />
          </div>
        </div>
        {hasRelatedDishesData && (
          <>
            <Heading heading={'Related Meals'} image={true} />
            <RelatedDishes
              title={content?.text}
              relatedMenuData={productData?.related_menu_items}
              mode={mode}
              currency={
                productData?.menu?.restaurant?.bank_info?.currency ?? ''
              }
            />
          </>
        )}
      </section>
    </BlockProvider>
  );
};
