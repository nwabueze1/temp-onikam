import { CustomThemeProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';
import { FormCard } from '../FormCard';
import { useCheckoutStyles } from './styles';
import { SubTotalCard } from '../SubTotalCard';
import {
  CheckoutDialogBox,
  CheckoutProps,
  TCreateAddressVariables,
  TUpdateGuestVariables,
} from './types';
import { FC, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useCreateAddress, useUpdateGuest } from './hooks';
import { FormCardRef } from '../FormCard/types';
import { FormikHelpers } from 'formik';

export const Checkout: FC<CheckoutProps> = ({
  goBack,
  backButtonName,
  mode,
  total,
  onPaymentSuccessful,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useCheckoutStyles(mainConfig as CustomThemeProps);
  const [loader, setLoader] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [proceed, setProceed] = useState<CheckoutDialogBox>('checkout');
  const formCardRef = useRef<FormCardRef>(null);

  const getDeliveryOption = (data: string) => {
    setDeliveryOption(data);
  };

  const handleProceed = () => {
    formCardRef?.current?.submit?.();
    setLoader(!loader);
  };

  const handleGoto = () => {
    goBack && goBack();
  };

  const handleGotoCheckout = () => {
    setProceed('checkout');
  };

  const handleSuccess = () => {
    setProceed('payment');
  };

  const updateGuest = useUpdateGuest();
  const createAddress = useCreateAddress();

  const guest = async (isPickUp: boolean, data: TUpdateGuestVariables) => {
    const guest = await updateGuest(data, isPickUp, handleSuccess);
    return guest;
  };

  const handleUpdateGuest = async (data: Record<string, string>) => {
    const isPickUp = deliveryOption === 'pickup';

    const guestInput: TUpdateGuestVariables = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
    };

    const addressInput: TCreateAddressVariables = {
      addressline1: data.addressline1,
      city: data.city,
      country: data.country,
      postcode: data.postcode,
      state: data.state,
    };

    isPickUp
      ? await guest(true, guestInput)
      : await createAddress(
          addressInput,
          await guest(false, guestInput),
          handleSuccess
        );
  };

  const handleSubmit = (
    data: Record<string, string>,
    _: FormikHelpers<Record<string, string>>
  ) => {
    handleUpdateGuest(data);
  };

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <div className={classes.formContainer}>
            <FormCard
              ref={formCardRef}
              deliveryOption={getDeliveryOption}
              isPayment={proceed === 'payment'}
              pickedOption={deliveryOption}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className={classes.subTotal}>
            <SubTotalCard
              type={proceed}
              variant="color"
              onProceed={handleProceed}
              mode={mode}
              total={total}
              deliveryOption={deliveryOption}
              onPaymentSuccessFull={onPaymentSuccessful}
            />
          </div>
        </div>
        {proceed === 'checkout' ? (
          <div className={classes.continueShopping} onClick={handleGoto}>
            <span>
              <BiArrowBack />
            </span>
            <span>{backButtonName}</span>
          </div>
        ) : (
          <div
            className={classes.continueShopping}
            onClick={handleGotoCheckout}
          >
            <span>
              <BiArrowBack />
            </span>
            <span>Back To Checkout</span>
          </div>
        )}
      </div>
    </section>
  );
};
