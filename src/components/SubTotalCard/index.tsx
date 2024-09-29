import { FC, ReactNode, useState } from 'react';
import { usePaymentStyles } from './styles';
import clx from 'classnames';
import { getSubtotalData } from './helper';
import { CustomThemeProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';
import { Button } from '../Button';
import { PaymentCardTypes } from './types';
import { getCurrency } from '../../helper';
import { subtotalData } from './data';
import { KiamoniState } from '../Provider';
import { useSelector } from 'react-redux';
import { calculateCartSubTotal, calculateCartItemsSumTotal } from '../../util';
import { CoreCartFields } from '../../models';

export const SubTotalCard: FC<PaymentCardTypes> = ({
  variant,
  type,
  onProceed,
  mode,
  deliveryOption,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const { restaurant, loading } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const [pickPaymentOption] = useState(false);
  const classes = usePaymentStyles(mainConfig as CustomThemeProps);
  const cart = restaurant?.cart;

  let currency = cart?.restaurant?.bank_info?.currency ?? '';

  const payData = {
    subTotal: calculateCartItemsSumTotal(cart as CoreCartFields),
    delivery_fee:
      deliveryOption === 'delivery'
        ? cart?.restaurant?.bank_info?.delivery_fee || 0
        : Number('0.00'),
  };

  const handleGotoPayment = () => {
    if (type === 'checkout') {
      onProceed();
    }
  };
  const renderOrderDetails = (): ReactNode => {
    return getSubtotalData(type, payData)?.map((item, index: number) => {
      return (
        <div key={index} className={classes.subTotal}>
          <p>{item?.text}</p>
          <p className="right">
            <span>{getCurrency(currency ?? '')}</span>{' '}
            <span>{new Intl.NumberFormat('en-us').format(item?.cost)}</span>
          </p>
        </div>
      );
    });
  };

  const displayPaymentOptions = () => {
    return null;
  };

  return (
    <article className={classes.root}>
      <div className={clx(classes.container, variant)}>
        {type === 'checkout' && (
          <>
            <h1 className={classes.header}>Order Summary</h1>
            <div className={classes.priceWrapper}>{renderOrderDetails()}</div>
            <div className={clx(classes.dividedLine, variant)} />
          </>
        )}
        {type !== 'payment' && (
          <div className={clx(classes.subTotal, 'total', type)}>
            <p>Total</p>
            <p className="right">
              <span>{getCurrency(currency ?? '')}</span>
              <span>{calculateCartSubTotal(cart as CoreCartFields)}</span>
            </p>
          </div>
        )}

        {type !== 'checkout' && (
          <>
            <div className={classes.cardContainer}>
              {displayPaymentOptions()}
            </div>
          </>
        )}
        {type !== 'payment' && (
          <div className={classes.buttonContainer} onClick={handleGotoPayment}>
            <Button
              type={variant === 'color' ? 'primary' : 'secondary'}
              mode={mode}
              loading={loading}
            >
              <p className={classes.buttonContainerText}>
                {type === 'checkout'
                  ? 'Proceed to Payment'
                  : 'Proceed to checkout'}
              </p>
            </Button>
          </div>
        )}
        {type === 'payment' && pickPaymentOption && (
          <p className={classes.paymentOptionError}>
            Please pick one of the payment option
          </p>
        )}
      </div>
      {type !== 'cart' && (
        <div className={classes.bottomContainer}>
          <p className={classes.firstText}>
            {type === 'checkout'
              ? subtotalData.checkOutText
              : subtotalData.paymentMainText}
          </p>
          {type === 'payment' && (
            <p className={classes.secondText}>{subtotalData.paymentText}</p>
          )}
        </div>
      )}
    </article>
  );
};
