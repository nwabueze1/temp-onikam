import { FC, ReactNode } from 'react';
import { PaymentCardTypes } from './types';
import {
  BlockProviderProps,
  Button,
  KiamoniState,
  useBlockSelector,
} from '../../../../components';
import { usePaymentStyles } from './styles';
import { CustomThemeProps } from '../../../../types';
import clx from 'classnames';
import { useSelector } from 'react-redux';
import { getCurrency } from '../../../../helper';

export const PaymentCard: FC<PaymentCardTypes> = ({
  variant = 'color',
  text,
  gotoCheckout,
  total,
  mode,
  type,
  children,
  loading,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const classes = usePaymentStyles(mainConfig as CustomThemeProps);

  const cart = restaurant?.cart;
  let currency = cart?.restaurant?.bank_info?.currency ?? '';

  const orderDetails = [
    { text: 'Subtotal', total: total ?? 0 },
    { text: 'Total Discount', total: 0 },
  ];

  const renderOrderDetails = (): ReactNode => {
    return orderDetails?.map((item, index: number) => {
      return (
        <div key={index} className={classes.subTotal}>
          <p>{item?.text}</p>
          <p className="right">
            <span>{getCurrency(currency ?? '')}</span>{' '}
            <span>{new Intl.NumberFormat('en-us').format(item?.total)}</span>
          </p>
        </div>
      );
    });
  };

  const handleOrderNow = () => {
    gotoCheckout && gotoCheckout();
  };

  return (
    <article className={classes.root}>
      <div className={clx(classes.container, variant)}>
        <h1 className={classes.header}>Order {type}</h1>
        {!loading && type === 'summary' ? (
          <>
            <div className={classes.priceWrapper}>{renderOrderDetails()}</div>
            <div className={clx(classes.dividedLine, variant)} />
            <div className={clx(classes.subTotal, 'total')}>
              <p>Total</p>
              <p className="right">
                <span>{getCurrency(currency ?? '')}</span>{' '}
                <span>{new Intl.NumberFormat('en-us').format(total ?? 0)}</span>
              </p>
            </div>
            <div className={classes.buttonContainer} onClick={handleOrderNow}>
              <Button
                type={variant === 'color' ? 'primary' : 'secondary'}
                mode={mode ?? 'view'}
              >
                Proceed to checkout
              </Button>
            </div>
          </>
        ) : (
          children
        )}
      </div>
      <div className={classes.bottomContainer}>
        {text ? text : 'Your order has been placed successfully'}
      </div>
    </article>
  );
};
