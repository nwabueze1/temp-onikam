import { FC, useEffect, useMemo, useState } from 'react';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useGetColor } from '../../hooks';
import { useKiamoniBlock23Styles } from './styles';
import { BlockProvider, KiamoniState, Checkout } from '../../components';
import { CartCard } from './components/CartCard';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import clx from 'classnames';
import { useUpdateCartItemQuantity } from './hooks';
import { orderDataObject, parseRecursiveHelper, parsedData } from './helper';
import { PaymentSection } from './components/PaymentSection';
import { getCurrency, useRecordCartAction } from '../../helper';
import block23 from '../../mappings/block23';
import Cookies from 'universal-cookie';
import {
  calculateCartItemsSumTotal,
  calculateCartItemSumTotal,
} from '../../util';
import { CoreCartFields } from '../../models';

const { uuid: BLOCK_UUID } = block23;

export const KiamoniBlock23: FC<KiamoniPropType> = ({
  content,
  configuration,
  mode,
  uuid,
}) => {
  const { restaurant, networkOperation } = useSelector<
    KiamoniState,
    KiamoniState
  >((store) => store);
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock23Styles(mainConfig as CustomThemeProps);
  const [toggleBox, setToggleBox] = useState(false);
  const [updatedUuid, setUpdatedUuid] = useState('');
  const [orderUuid, setOrderUuid] = useState('');
  const [isOrderBooked, setIsOrderBooked] = useState(false);
  const updateCartItemQuantity = useUpdateCartItemQuantity();
  const cookies = new Cookies();
  const cartCookie = useMemo(() => cookies.get('cart'), []);
  const [loading, setLoading] = useState(false);
  const [isValidatingOrder, setIsValidatingOrder] = useState(false);
  const [_, setDisplayCheckout] = useState(false);
  const site_uuid = content?.site_uuid;
  const cart = restaurant?.cart;

  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    setIsDomLoaded(true);

    if (!cartCookie || !cartCookie[site_uuid]) {
      setLoading(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (isDomLoaded) {
      const queryParams = new URLSearchParams(window.location.search);
      setDisplayCheckout(Boolean(queryParams.get('hivedeck_payment_type')));
    }
  }, [isDomLoaded, loading]);

  useEffect(() => {
    handleOrderConfirmation();
  }, []);

  const getCartTotal = calculateCartItemsSumTotal(cart as CoreCartFields);
  const recordCartAction = useRecordCartAction();

  const handleOrderConfirmation = async () => {
    setIsValidatingOrder(true);
    const queryParams = new URLSearchParams(window.location.search);
  };

  const handleDeleteCartItem = async (uuid: string) => {
    updateCartItemQuantity({ uuid, quantity: 0 });
    setUpdatedUuid(uuid);
  };

  const handleToggleBack = () => {
    setToggleBox(false);
  };

  const handleGotoCheckout = () => {
    recordCartAction(BLOCK_UUID, 'checkout');
    setToggleBox(true);
  };

  const handlePaymentSuccessful = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const order_uuid = queryParams.get('hivedeck_order_uuid');
    setOrderUuid(order_uuid ?? '');
    setIsOrderBooked(true);
  };

  const orderData = orderDataObject(cart);

  const getCartCards = () => {
    return cart?.cartItems?.map((cartItem, index: number) => {
      const cartOptions = parsedData(cartItem?.options);

      return (
        <div key={index} className={classes.cartCard} data-info={'card'}>
          <CartCard
            image={parseRecursiveHelper(cartItem?.menuItem?.image as any)}
            quantity={Number(cartItem?.quantity)}
            price={calculateCartItemSumTotal(cartItem)}
            currency={getCurrency(cart?.currency ?? '')}
            name={cartItem?.menuItem?.name}
            optionConfigData={cartOptions?.optionData}
            uuid={cartItem?.uuid ?? ''}
            cartOptions={cartItem?.options}
            mode={mode}
            orderQuantity={
              orderUuid || isOrderBooked ? Number(cartItem?.quantity) : null
            }
          />
          {!isOrderBooked && !isValidatingOrder && (
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg"
              alt="close icon"
              className={classes.closeButton}
              onClick={() => handleDeleteCartItem(cartItem?.uuid ?? '')}
            />
          )}
        </div>
      );
    });
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section className={classes.root} data-uuid={uuid}>
        {cart?.cartItems ? (
          <div className={classes.container}>
            {!toggleBox || isOrderBooked ? (
              <div className={classes.checkoutContainer}>
                <div className={classes.cartContainer}>
                  {loading &&
                  networkOperation === `update.cart-item.${updatedUuid}` ? (
                    <div className={clx(classes.loader, 'loader')} />
                  ) : (
                    getCartCards()
                  )}
                </div>
                <PaymentSection
                  orderData={orderData}
                  cart={cart}
                  classes={classes}
                  content={content}
                  getCartTotal={getCartTotal}
                  handleGotoCheckout={handleGotoCheckout}
                  mode={mode}
                  orderUuid={orderUuid}
                  isOrderBooked={isOrderBooked}
                  isValidatingOrder={isValidatingOrder}
                />
              </div>
            ) : (
              <Checkout
                backButtonName={'Back to Product Info'}
                goBack={handleToggleBack}
                mode={mode ?? 'view'}
                total={getCartTotal ?? 0}
                onPaymentSuccessful={handlePaymentSuccessful}
              />
            )}
            {!toggleBox && (
              <div className={classes.continueShopping}>
                <a href={'/cart'}>
                  <span>
                    <BiArrowBack />
                  </span>
                  Continue Shopping
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className={classes.container}>
            <div className={classes.emptyStyle}>
              <p className={classes.shoppingCart}>Shopping Cart</p>
              <div className={classes.imageGif}>
                <img
                  src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/empty-cart.gif"
                  alt="Empty cart Gif"
                />
                <div className={classes.cartText}>
                  <p className={classes.cartTextHeader}>Your Cart Is Empty</p>
                  <p className={classes.cartTextDescriptions}>
                    You are are yet to add any item to cart, check out our
                    awesome menu and place your order now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </BlockProvider>
  );
};
