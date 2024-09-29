import { FC } from 'react';
import { PaymentSectionProps } from './type';
import { PaymentCard } from '../PaymentCard';
import { getCurrency } from '../../../../helper';
import clx from 'classnames';
import { CircularProgress } from '@mui/material';

export const PaymentSection: FC<PaymentSectionProps> = ({
  getCartTotal,
  content,
  handleGotoCheckout,
  mode,
  orderData,
  classes,
  cart,
  isValidatingOrder,
  isOrderBooked,
}) => {
  const deliveryFee = cart?.guest?.address?.uuid
    ? cart?.restaurant?.bank_info?.delivery_fee ?? 0
    : 0;

  const renderLoader = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="inherit" size={16} />
    </div>
  );

  return (
    <article>
      {!isOrderBooked && !isValidatingOrder ? (
        <div>
          <PaymentCard
            total={getCartTotal ?? 0}
            variant="color"
            text={content?.text?.description}
            gotoCheckout={handleGotoCheckout}
            mode={mode}
            type={'summary'}
          ></PaymentCard>
        </div>
      ) : (
        <div>
          <PaymentCard variant="color" mode={mode} type={'details'}>
            {isValidatingOrder && renderLoader()}
            {orderData?.orderDetailsData
              ?.slice(0, 4)
              ?.map((item, index: number) => {
                const keys = Object.keys(item) as Array<keyof typeof item>;
                const key = keys?.length > 0 ? keys[0] : '';
                const value = key ? item[key] : '';
                return (
                  <div className={classes.paymentKeyValue} key={index}>
                    <span>{key.replace(/_/g, ' ')}</span>
                    <span className="bold">{value}</span>
                  </div>
                );
              })}
            <div className={clx(classes.paymentKeyValue, 'increaseFont')}>
              <span className="bold">Total</span>
              <span className="bold">{`${getCurrency(
                cart?.currency ?? ''
              )}${new Intl.NumberFormat('en-us').format(
                getCartTotal + deliveryFee
              )}`}</span>
            </div>
            <div className={classes.paymentAccountDetails}>
              {orderData?.orderDetailsData
                ?.slice(4, 7)
                ?.map((item, index: number) => {
                  const keys = Object.keys(item) as Array<keyof typeof item>;
                  const key = keys?.length > 0 ? keys[0] : '';
                  const value = key ? item[key] : '';
                  return (
                    <div className={classes.paymentKeyValue} key={index}>
                      <span>{key.replace(/_/g, ' ')}</span>
                      <span className="bold">{value}</span>
                    </div>
                  );
                })}
            </div>
          </PaymentCard>
        </div>
      )}
    </article>
  );
};
