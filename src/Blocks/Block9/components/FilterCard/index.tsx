import { ChangeEvent, FC, useState } from 'react';
import { FilterCardProps } from '../type';
import { BlockProviderProps, Button, InputText, useBlockSelector } from '../../../../components';
import { findLowestAndHighestPrice } from '../../helper';
import { useComponentsStyles } from '../styles';
import { CustomThemeProps } from '../../../../types';
import { FiSearch } from 'react-icons/fi';
import clx from 'classnames';

export const FilterCard: FC<FilterCardProps> = ({
  layoutClass,
  getCurrencySymbol,
  categoryItems,
  setSearchInput,
  mode
}) => {
  const { lowestPrice, highestPrice } =
    findLowestAndHighestPrice(categoryItems);

  const { mainConfig } = useBlockSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );
  const classes = useComponentsStyles(mainConfig as CustomThemeProps);

  const [price, setPrice] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };

  const handleSubmitPrice = () => {
    setSearchInput((prevState) => ({ ...prevState, price }));
  };

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    setSearchInput((prevState) => ({ ...prevState, search: newValue }));
  };

  const handleClearAll = () => {
    setSearchInput({ price: 0, search: '' });
    setPrice(0);
    setInputValue('');
  };

  return (
    <div className={classes.container}>
      <p
        className={clx(classes.clearButton, layoutClass)}
        onClick={handleClearAll}
      >
        Clear All
      </p>
      <div className={clx(classes.searchWrapper, 'mobile__search-wrapper')}>
        <div className={clx(classes.searchIcon)}>
          <FiSearch className={classes.searchFi} />
        </div>
        <InputText
          value={inputValue}
          onChange={handleInputChange}
          placeholder="search menu"
          active={true}
          variant="input__variant"
          name="search"
          handleKeyPressEnter={() => {}}
        />
      </div>
      <div className={clx(classes.priceFilter, layoutClass, 'drawer')}>
        <p className={classes.priceFilterText}>PRICE FILTER</p>
        <div className={classes.priceLowHigh}>
          <span>
            {getCurrencySymbol}
            {lowestPrice}
          </span>
          <span>
            {getCurrencySymbol}
            {highestPrice}
          </span>
        </div>
        <input
          type="range"
          id="minPrice"
          min={lowestPrice}
          max={highestPrice}
          value={price}
          onChange={handlePriceChange}
          className={classes.leftSideInput}
        />
        <div className={classes.filterButton} onClick={handleSubmitPrice}>
          <Button type="secondary" mode={mode}>
            <p className={classes.filterText}>Filter</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
