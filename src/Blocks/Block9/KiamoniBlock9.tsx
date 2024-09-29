import { FC, useEffect, useState, useMemo } from 'react';
import { CustomThemeProps, KiamoniPropType } from '../../types';
import { dropdownLists } from './data';
import { CoreMenuItemFields } from '../../models';
import { useGetColor, useLayoutParameter } from '../../hooks';
import { useKiamoniBlock9styles } from './styles';
import { parseMenuCategories, handleFilter, sortDataByName } from './helper';
import { BlockProvider, Drawer } from '../../components';
import { Dropdown } from '../../components';
import { getCurrency } from '../../helper';
import { FiFilter } from 'react-icons/fi';
import clx from 'classnames';
import { DropdownList, Categories, FilterCard, GetDishes } from './components';
import block9 from '../../mappings/block9';

const { uuid: BLOCK_UUID } = block9;

export const KiamoniBlock9: FC<KiamoniPropType> = ({
  mode = 'view',
  content,
  configuration,
  layouts,
  index,
  handleSelect,
  activeElement,
  uuid,
}) => {
  const [activeCategoryUuid, setActiveCategoryUuid] = useState('');
  const [selectedOption, setSelectedOption] = useState({
    name: '',
    uuid: '',
  });
  const key = 'blocks.' + String(index);

  const mainConfig = useGetColor(configuration as CustomThemeProps, 'main');
  const buttonConfig = useGetColor(configuration as CustomThemeProps, 'button');
  const classes = useKiamoniBlock9styles(mainConfig as CustomThemeProps);
  const { layoutClass, lg } = useLayoutParameter(layouts);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [filteredData, setFilteredData] = useState<
    CoreMenuItemFields[] | undefined
  >([]);

  const [searchInput, setSearchInput] = useState({ price: 0, search: '' });

  useEffect(() => {
    const menuCategories = content?.menu?.menuCategories;
    menuCategories?.length > 0 &&
      setActiveCategoryUuid(menuCategories[0]?.uuid);
  }, [content?.menu]);

  const activeCategory = useMemo(() => {
    return content?.menu?.menuCategories?.find(
      ({ uuid }: { uuid: string }) => uuid === activeCategoryUuid
    );
  }, [activeCategoryUuid]);

  const categoryItems = useMemo(() => {
    return content?.menu?.menuItems?.filter(
      (item: CoreMenuItemFields) =>
        item?.menuCategory?.uuid?.toString() === activeCategoryUuid
    );
  }, [activeCategoryUuid]);

  const getCurrencySymbol = getCurrency(
    content?.menu?.restaurant?.bank_info?.currency ?? ''
  );

  useEffect(() => {
    handleFilter(searchInput, setFilteredData, categoryItems);
  }, [searchInput, categoryItems]);

  const handleDropDown = (item: string) => {
    setSelectedOption({ name: item, uuid: '' });
    sortDataByName(filteredData ?? categoryItems, item, setFilteredData);
  };

  const handleToggle = () => {
    if (mode === 'edit') return;

    setActive(false);
    setToggle(!toggle);
  };

  const drawerLayout = [
    'layout_2',
    'layout_3',
    'layout_4',
    'layout_5',
  ].includes(layoutClass as string);

  return (
    <BlockProvider
      mainConfig={mainConfig}
      buttonConfig={buttonConfig}
      block_uuid={BLOCK_UUID}
    >
      <section
        className={clx(
          classes.root,
          mode === 'edit' &&
            activeElement === key &&
            classes.block9ActiveElement
        )}
        onClick={() => {
          handleSelect?.(key);
        }}
        data-uuid={uuid}
      >
        <div className={clx(classes.container, layoutClass)}>
          {drawerLayout && !lg && (
            <div className={clx(classes.leftSide, layoutClass)}>
              <FilterCard
                layoutClass={layoutClass}
                getCurrencySymbol={getCurrencySymbol}
                categoryItems={categoryItems}
                setSearchInput={setSearchInput}
                mode={mode}
              />
            </div>
          )}
          <div className={classes.rightSide}>
            <div className={clx(classes.containerHeader, layoutClass)}>
              <div className={classes.categories}>
                <Categories
                  categories={parseMenuCategories(
                    content?.menu?.menuCategories,
                    content?.menu?.menuItems
                  )}
                  activeCategoryUuid={activeCategoryUuid}
                  setActiveCategoryUuid={setActiveCategoryUuid}
                />
              </div>
              {!drawerLayout && !lg && (
                <div className={classes.moreFilter} onClick={handleToggle}>
                  <FiFilter className={classes.filterIcon} />
                  <p className={classes.filterText}>More Filters</p>
                </div>
              )}
            </div>
            {lg && (
              <div className={clx(classes.mobileFilterBlock, layoutClass)}>
                <div
                  className={clx(classes.mobileFilterBlockInner, layoutClass)}
                >
                  <div className={classes.moreFilter} onClick={handleToggle}>
                    <FiFilter className={classes.filterIcon} />
                    <p className={classes.filterText}>More Filters</p>
                  </div>
                  <div className={classes.filter}>
                    <Dropdown selectedOption={selectedOption}>
                      <DropdownList
                        items={dropdownLists}
                        handleDropDown={handleDropDown}
                      />
                    </Dropdown>
                  </div>
                </div>
              </div>
            )}
            <article className={classes.dishBlock}>
              <div className={clx(classes.dishBlockHeader, layoutClass)}>
                <div className={classes.dishBlockText}>
                  <h1 className={classes.dishBlockTextTitle}>
                    {activeCategory?.title}
                  </h1>
                  <p className={classes.dishBlockTextDescription}>
                    {activeCategory?.description}
                  </p>
                </div>
                {!lg && (
                  <div className={classes.filter}>
                    <Dropdown selectedOption={selectedOption}>
                      <DropdownList
                        items={dropdownLists}
                        handleDropDown={handleDropDown}
                      />
                    </Dropdown>
                  </div>
                )}
              </div>
              <div className={clx(classes.dishContainer, layoutClass)}>
                <GetDishes
                  mode={mode}
                  items={filteredData ?? categoryItems ?? []}
                  getCurrencySymbol={getCurrencySymbol}
                />
              </div>
            </article>
          </div>
          <Drawer
            isOpen={toggle}
            onClose={handleToggle}
            hasSearchBar={false}
            active={active}
            mode={mode}
          >
            <div className={clx(classes.leftSide, layoutClass)}>
              <FilterCard
                layoutClass={layoutClass}
                getCurrencySymbol={getCurrencySymbol}
                categoryItems={categoryItems}
                setSearchInput={setSearchInput}
                mode={mode}
              />
            </div>
          </Drawer>
        </div>
      </section>
    </BlockProvider>
  );
};
