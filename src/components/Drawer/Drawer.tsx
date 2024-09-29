import { useState } from 'react';
import clx from 'classnames';
import { DrawerProps } from './types';
import { FiSearch } from 'react-icons/fi';
import { useDrawerStyles } from './styles';
import { InputText } from '../Input/Input';
import { CustomThemeProps } from '../../types';
import { BlockProviderProps, useBlockSelector } from '..';

export const Drawer = ({
  children,
  isOpen,
  onClose,
  hasSearchBar,
  onChange,
  active,
  searchUrl,
  mode,
  layoutClass,
}: DrawerProps) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useDrawerStyles(mainConfig as CustomThemeProps);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const handleClose = () => {
    onClose?.();
    onChange?.('');
    setInputValue('');
  };

  const handleKeyPressEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (mode === 'edit') return;
    if (event.key === 'Enter' && inputValue !== '') {
      window.location.href = `${searchUrl}?search=${inputValue}`;
    }
  };

  return (
    <>
      <div
        className={clx(
          classes.mobileNav,
          {
            [classes.displayMobileNav]: isOpen,
          },
          layoutClass
        )}
      >
        <div className={classes.mobileNavHeader}>
          <div className={clx(classes.closeIcon)} onClick={handleClose}>
            <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg" />
          </div>
        </div>
        {hasSearchBar && (
          <div className={clx(classes.searchWrapper, 'mobile__search-wrapper')}>
            <div className={clx(classes.searchIcon)}>
              <FiSearch className={classes.searchFi} />
            </div>
            <InputText
              value={inputValue}
              onChange={handleInputChange}
              placeholder="search menu"
              active={active}
              variant="input__variant"
              name="search"
              handleKeyPressEnter={handleKeyPressEnter}
            />
          </div>
        )}
        {children}
      </div>
      <div
        className={clx(
          classes.drawerOverlay,
          isOpen && classes.drawerOverlayActive,
          {
            [classes.hideDrawerOverlay]: mode === 'edit',
          }
        )}
        onClick={onClose}
      />
    </>
  );
};
