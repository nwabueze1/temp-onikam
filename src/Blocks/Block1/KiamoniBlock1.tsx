import clx from 'classnames';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { BlockProvider, KiamoniState } from '../../components';
import { Button } from '../../components/Button/Button';
import { Drawer } from '../../components/Drawer';
import { useDrawerStyles } from '../../components/Drawer/styles';
import { InputText } from '../../components/Input/Input';
import { createResponsiveImage } from '../../helper';
import { useGetColor } from '../../hooks/useGetColor';
import { useLayoutParameter } from '../../hooks/useLayoutParameter';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { useKiamoniBlock1Styles } from '.';
import { useKiamoniBlock1MobileStyles } from '.';
import { DisplayLink } from './helper';
import block1 from '../../mappings/block1';

const { uuid: BLOCK_UUID } = block1;

export const KiamoniBlock1 = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
  screenSize,
}: KiamoniPropType) => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (state) => state
  );
  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock1Styles(mainConfig);
  const classesMobile = useKiamoniBlock1MobileStyles(mainConfig);
  const drawerClasses = useDrawerStyles(mainConfig);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchpop, setSearchPop] = useState(false);
  const key = 'blocks.' + String(index);
  const cartItemCount = restaurant?.cart
    ? (restaurant?.cart?.cartItems?.length as number)
    : restaurant?.cartItemCount !== undefined
    ? restaurant?.cartItemCount
    : 0;

  const handleToggle = () => {
    setActive(false);
    setToggle(!toggle);
  };

  const handleClose = () => {
    setActive(false);
    setToggle(false);
  };

  const { path, selectedLayout, layoutClass, lg, sm } =
    useLayoutParameter(layouts);
  const isLayout3 = selectedLayout === 'layout-3';

  const handleFocus = () => {
    hasSearchBar && !isLayout3 && setToggle(!toggle);
    hasSearchBar && isLayout3 && setSearchPop(true);
    hasSearchBar && setActive(!isLayout3 ? true : false);
    hasSearchBar && setSearchActive(isLayout3 ? true : false);
  };

  const hasSearchBar =
    (['layout-1', 'layout-2'].includes(selectedLayout ?? '') && lg) ||
    (selectedLayout !== 'layout-5' && sm);

  const handleNameChange = (value: string) => {
    setSearchInput(value);
  };

  const handleKeyPressEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (mode === 'edit') return;
    if (event.key === 'Enter' && searchInput !== '') {
      window.location.href = `/search?query=${searchInput}`;
    }
  };

  const getButtons = () => {
    return content?.buttons?.map(
      (button: { url: string; text: string }, index: number) => (
        <div className={clx(classesMobile.button, layoutClass)} key={index}>
          <Button type="primary" destination={button?.url} mode={mode}>
            {button?.text}
          </Button>
        </div>
      )
    );
  };

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <nav
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block1ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          <Drawer
            isOpen={toggle}
            onClose={handleClose}
            hasSearchBar={hasSearchBar}
            active={active}
            value={searchInput}
            onChange={handleNameChange}
            searchUrl={content?.searchPage?.url}
            mode={mode}
            layoutClass={layoutClass}
          >
            <div className={clx(classes.menuList, classes.mobileNavWrapper)}>
              <DisplayLink
                content={content}
                classes={classes}
                path={path}
                mode={mode}
              />
            </div>
          </Drawer>
          <div
            className={clx(classesMobile.openNav, layoutClass)}
            onClick={handleToggle}
          >
            <img
              src={
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Hamburger.svg'
              }
              className={clx(classesMobile.openNavImg, layoutClass)}
              alt="Hamburger Icon"
            />
          </div>
          <a
            className={clx(classes.logoWrapper, layoutClass, {
              ['searchPop']: searchpop,
            })}
            href={mode === 'view' ? '/' : undefined}
          >
            {createResponsiveImage(content?.image, {
              className: classes.logo,
              screenSize,
              classNames: {
                picture: clx(classes.logo__container, layoutClass),
              },
            })}
          </a>
          <div className={clx(classes.menuList, layoutClass)}>
            <DisplayLink
              content={content}
              classes={classes}
              path={path}
              mode={mode}
            />
          </div>
          <div
            className={clx(drawerClasses.searchWrapper, layoutClass, {
              ['searchPop']: searchpop,
            })}
          >
            <div
              className={clx(drawerClasses.searchIcon, layoutClass, {
                ['searchPop']: searchpop,
              })}
              onClick={handleFocus}
            >
              <FiSearch size={22} className={drawerClasses.searchFi} />
            </div>
            <InputText
              value={searchInput}
              onChange={handleNameChange}
              placeholder="search"
              active={searchActive}
              cancelButton={true}
              name="search"
              handleKeyPressEnter={handleKeyPressEnter}
            />
            {((!hasSearchBar && searchInput.length > 0) ||
              (layoutClass === 'layout_5' && searchInput.length > 0) ||
              isLayout3) && (
              <img
                src={
                  'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg'
                }
                alt="Close Icon"
                className={clx(drawerClasses.cancelText, layoutClass)}
                onClick={() => {
                  setSearchInput('');
                  setSearchPop(false);
                }}
              />
            )}
          </div>
          <div className={clx(classes.iconWrapper, layoutClass)}>
            <a
              href={mode === 'view' ? '/cart' : undefined}
              className={clx(classesMobile.cart, layoutClass, {
                ['searchPop']: searchpop,
              })}
            >
              <img
                src={
                  'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(4).svg'
                }
                className={clx(classesMobile.cartImg)}
                alt="Cart Icon"
              />
              {cartItemCount > 0 && (
                <span className="cart__number">{cartItemCount}</span>
              )}
            </a>
          </div>
          {['layout-4', 'layout-5'].includes(selectedLayout ?? '') &&
            getButtons()}
        </div>
        <div className={clx(classesMobile.mobileWrapper, layoutClass)}>
          {layoutClass === 'layout_3' && (
            <DisplayLink
              content={content}
              classes={classes}
              path={path}
              mode={mode}
            />
          )}
        </div>
      </nav>
    </BlockProvider>
  );
};
