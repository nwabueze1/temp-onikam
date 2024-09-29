import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CoreMenuItemFields } from '../../../../models';
import { CustomThemeProps } from '../../../../types';
import {
  BlockProvider,
  BlockProviderProps,
  Button,
  KiamoniState,
  useBlockSelector,
} from '../../../../components';
import { useOptionConfigStyles } from './styles';
import clx from 'classnames';
import { getCurrency, notify } from '../../../../helper';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useAddToCart } from './hooks';
import { AddToCartDialog } from '../AddToCartDialog';
import {
  calculateSumOfOption,
  extractInitialMenuItemOptions,
  getOptionText,
} from './helpers';

export type MenuConfigType = {
  name: string;
  uuid: string;
  options: { name: string; amount: number }[];
  selectedChoices: { name: string; amount: number }[];
  type: 'selection' | 'deselection' | 'extras';
};
export const OptionConfigCards = ({
  clientMenuItem,
  mode,
}: {
  clientMenuItem: CoreMenuItemFields;
  mode: 'view' | 'edit';
}) => {
  const { loading } = useSelector<KiamoniState, KiamoniState>((store) => store);
  const { mainConfig, buttonConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useOptionConfigStyles(mainConfig as CustomThemeProps);
  const [menuOptionConfigs, setMenuOptionConfigs] = useState<MenuConfigType[]>(
    extractInitialMenuItemOptions(clientMenuItem)
  );
  const [quantity, setQuantity] = useState(1);
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const addToCart = useAddToCart();
  const currency = clientMenuItem?.menu?.restaurant?.bank_info?.currency;
  const total =
    (clientMenuItem?.price + calculateSumOfOption(menuOptionConfigs)) *
    quantity;
  const handleAddQuantity = (add: boolean) => {
    setQuantity(add ? quantity + 1 : quantity > 1 ? quantity - 1 : 1);
  };

  const onClose = () => {
    setToggleOpen(false);
  };

  const handleAddToCart = async () => {
    console.log();
    if (!isOptionsValid()) {
      return notify('error', 'Please select a choice from all options');
    }

    const cartItem = {
      menu_item_uuid: clientMenuItem?.uuid as string,
      quantity,
      detail: clientMenuItem?.description as string,
      options: JSON.stringify(menuOptionConfigs),
    };

    const getCart = await addToCart(cartItem);
    setIsSuccess(getCart ? true : false);
    clientMenuItem && setToggleOpen(true);
    return;
  };

  const isOptionsValid = () => {
    return menuOptionConfigs?.every(
      (option) => option.selectedChoices.length > 0
    );
  };

  const isSelected = (name: string, index: number) => {
    const exists = menuOptionConfigs[index]?.selectedChoices?.find(
      (c) => c.name === name
    );
    return exists ? 'hasColor' : '';
  };

  const getCurrencySymbol = getCurrency(currency ?? '');

  const handleOptionChange = (
    option: { name: string; amount: number },
    index: number
  ) => {
    let currentSelection = menuOptionConfigs[index];

    if (currentSelection.type === 'extras') {
      const isAdded = currentSelection.selectedChoices.find(
        (item) => item.name === option.name
      );
      if (isAdded) {
        currentSelection = {
          ...currentSelection,
          selectedChoices: currentSelection.selectedChoices.filter(
            (item) => item.name !== option.name
          ),
        };
      } else {
        currentSelection = {
          ...currentSelection,
          selectedChoices: [...currentSelection.selectedChoices, option],
        };
      }
    } else {
      currentSelection = {
        ...currentSelection,
        selectedChoices: [option],
      };
    }

    setMenuOptionConfigs(
      menuOptionConfigs.map((opt, i) => (i === index ? currentSelection : opt))
    );
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={block_uuid}
    >
      <AddToCartDialog
        position={'TopLeft'}
        open={toggleOpen}
        onClose={onClose}
        dishDetails={{
          name: clientMenuItem?.name,
          total: `${getCurrencySymbol}${total}`,
          image: clientMenuItem?.image,
        }}
        isSuccess={isSuccess}
        getOptionsConfig={menuOptionConfigs}
        mode={mode}
      />
      <p className={classes.priceContainer}>
        <span>{getCurrencySymbol}</span>
        <span>{total ? total.toFixed(2) : 0.0}</span>
      </p>
      {menuOptionConfigs?.map((mOptionConfig, index) => (
        <div key={index} className={classes.subTotal}>
          <p className={classes.header}> {mOptionConfig.name}</p>
          <p className={classes.subtotalDescription}>
            {getOptionText(mOptionConfig.type)}
          </p>
          <div className="right">
            <div className={classes.optionBlock}>
              {mOptionConfig?.options?.map((option, i) => (
                <div
                  key={i}
                  className={clx(
                    classes.optionBlockName,
                    isSelected(option?.name, index)
                  )}
                  onClick={() => handleOptionChange(option, index)}
                >
                  {option?.name}{' '}
                  {mOptionConfig.type === 'deselection' ? '-' : '+'}
                  {getCurrencySymbol}
                  {option?.amount}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className={classes.purchaseContainer}>
        <p className={classes.purchaseText}>Purchase Quantity</p>
        <div className={classes.incrementContainer}>
          <div className={classes.purchaseIncrement}>
            <p>{quantity}</p>
            <div className={classes.incrementIcons}>
              <div
                className={classes.icon}
                onClick={() => handleAddQuantity(false)}
              >
                <AiOutlineMinus />
              </div>
              <div
                className={classes.icon}
                onClick={() => handleAddQuantity(true)}
              >
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <div className={classes.checkoutButton} onClick={handleAddToCart}>
            <Button type="tertiary" mode={mode}>
              <p className={classes.buttonText}>
                {loading && <span className="spinner" />}
                Add to Cart
                <AiOutlinePlus className={classes.buttonIcon} />
              </p>
            </Button>
          </div>
        </div>
      </div>
    </BlockProvider>
  );
};
