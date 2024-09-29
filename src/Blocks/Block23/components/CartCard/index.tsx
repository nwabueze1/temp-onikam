import { FC, useState } from 'react';
import { CartCardTypes } from './types';
import {
  BlockProviderProps,
  DishCard,
  KiamoniState,
  useBlockSelector,
} from '../../../../components';
import { useCartCard } from './styles';
import { CustomThemeProps } from '../../../../types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { sortOptionByType } from '../../helper';
import clx from 'classnames';
import { useUpdateCartItemQuantity } from '../../hooks';
import { useSelector } from 'react-redux';

export const CartCard: FC<CartCardTypes> = ({
  image,
  quantity,
  price,
  currency,
  name,
  uuid,
  optionConfigData,
  mode,
  orderQuantity,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const { networkOperation, loading } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const classes = useCartCard(mainConfig as CustomThemeProps);
  const [updatedUuid, setUpdatedUuid] = useState('');
  const updateCartItemQuantity = useUpdateCartItemQuantity();

  const handleQuantityChange = async (quantity: number) => {
    if (!uuid) return;
    await updateCartItemQuantity({
      uuid,
      quantity,
    });
    setUpdatedUuid(uuid);
  };

  const getOptionsConfigs = () => {
    return Object.keys(sortOptionByType(optionConfigData))?.map(
      (option, index: number) => {
        return (
          <div key={index} className={classes.optionContainer}>
            <p className={classes.optionName}>{option}:</p>
            <div className={classes.selectionContainer}>
              {sortOptionByType(optionConfigData)?.[option]?.map(
                (item, index: number) => {
                  return (
                    <span key={index} className={classes.selectionName}>
                      {item},
                    </span>
                  );
                }
              )}
            </div>
          </div>
        );
      }
    );
  };

  return (
    <article className={classes.root}>
      <div className={classes.container}>
        <div className={classes.dishBlock}>
          <DishCard mode={mode ?? 'view'}>
            <div
              draggable={false}
              className={classes.dishCardImg}
              style={{ backgroundImage: `url('${image?.src}')` }}
            />
          </DishCard>
        </div>
        <div className={classes.dishInfo}>
          <h6 className={classes.title}>{name}</h6>
          <div className={classes.otherInfo}>{getOptionsConfigs()}</div>
        </div>
        <div className={classes.quantityContainer}>
          {!orderQuantity ? (
            <div className={classes.purchaseIncrement}>
              <p>{quantity}</p>

              <div className={classes.incrementIcons}>
                <div
                  className={classes.icon}
                  onClick={() => handleQuantityChange(Number(quantity) - 1)}
                >
                  <AiOutlineMinus />
                </div>
                <div
                  className={classes.icon}
                  onClick={() => handleQuantityChange(Number(quantity) + 1)}
                >
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
          ) : (
            <p className={classes.orderQuantity}>
              QTY: <span>{orderQuantity}</span>
            </p>
          )}
        </div>
        <div className={classes.priceContainer}>
          {loading && networkOperation === `update.cart-item.${updatedUuid}` ? (
            <div className={clx(classes.loader, 'loader')} />
          ) : (
            <>
              <span>{currency}</span>{' '}
              <span>{new Intl.NumberFormat('en-us').format(price)}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
