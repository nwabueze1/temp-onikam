import { FC } from 'react';
import { CategoriesProps } from './types';
import { useCategoriesStyles } from './styles';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import clx from 'classnames';

export const Categories: FC<CategoriesProps> = ({
  categories,
  activeCategoryUuid,
  setActiveCategoryUuid,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useCategoriesStyles(mainConfig as CustomThemeProps);

  const displayCategories = () => {
    return categories?.map((category, index: number) => {
      const isActive = category?.uuid === activeCategoryUuid;

      return (
        <div
          className={clx(classes.category, isActive && 'activeColor', 'text')}
          key={index}
          onClick={() => { setActiveCategoryUuid(category?.uuid) }} 
        >
          <span>{category?.name}</span>
          <span className={classes.quantity}>{`(${category?.numMenuItems})`}</span>
        </div>
      );
    });
  };

  return (
    <section className={classes.blogWrapper}>{displayCategories()}</section>
  );
};
