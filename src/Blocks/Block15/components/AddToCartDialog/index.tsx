import { CustomThemeProps } from '../../../../types';
import {
  BlockProvider,
  BlockProviderProps,
  Button,
  DishCard,
  useBlockSelector,
} from '../../../../components';
import { FC } from 'react';
import { Modal } from '../../../../components';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { useKiamoniBlock15Styles } from './styles';
import { titleText } from '../../helper';
import { AddToCartDialogProps } from './types';

export const AddToCartDialog: FC<AddToCartDialogProps> = ({
  position = 'TopLeft',
  onClose,
  open,
  dishDetails,
  getOptionsConfig,
  isSuccess,
  mode,
}) => {
  const { mainConfig, buttonConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useKiamoniBlock15Styles(mainConfig as CustomThemeProps);

  const handleClose = () => {
    onClose();
  };

  const displayOptions = getOptionsConfig?.map((optConfig, index) => (
    <div key={index} className={classes.optionItem}>
      <p className={classes.optionName}>
        {optConfig.name} :
        <div className={classes.optionTypes}>
          {optConfig?.selectedChoices?.map((choice, i) => (
            <p key={i}>{choice.name}</p>
          ))}
        </div>
      </p>
    </div>
  ));

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={block_uuid}
    >
      <Modal isOpen={open} onClose={handleClose} position={position}>
        <div className={classes.modalContainer}>
          <div className={classes.headerWrapper}>
            <h1 className={classes.headerContainer}>
              <div className={classes.header}>
                {isSuccess && <IoCheckmarkOutline />}
                <span className={classes.headerText}>
                  {titleText(isSuccess)}
                </span>
              </div>
            </h1>
            <DishCard hasSearch={false} mode={mode} size="sm">
              <div
                draggable={false}
                className={classes.dishCardImg}
                style={{
                  backgroundImage: `url('${dishDetails?.image?.src}')`,
                }}
              />
            </DishCard>
            <div>
              <p className={classes.addToCartName}>{dishDetails?.name}</p>
              <p className={classes.addToCartPrice}>{dishDetails?.total}</p>
              <div className={classes.optionArray}>
                {isSuccess && displayOptions}
              </div>
            </div>
          </div>
          <div className={classes.dividingLine} />
          <div className={classes.subHeader}>
            <div className={classes.subHeaderText}>
              <p className={classes.subHeaderText}>
                You've populated your cart with
              </p>
              <p className={classes.subHeaderItems}>{isSuccess ? 1 : 0} item</p>
            </div>
            {isSuccess && (
              <div className={classes.buttonContainer}>
                <p className={classes.continueButton} onClick={handleClose}>
                  Continue Shopping
                </p>
                <div className={classes.buttonDivider} />
                <div className={classes.checkoutbutton}>
                  <Button type="secondary" destination="/cart" mode={mode}>
                    <p className={classes.buttonText}>Checkout</p>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </BlockProvider>
  );
};
