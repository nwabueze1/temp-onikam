import { useBlogCategories } from './styles';
import clx from 'classnames';
import { FC } from 'react';
import { CustomThemeProps } from '../../types';
import { BlogCategoriesTypes } from './types';
import { BlockProviderProps, useBlockSelector } from '..';

export const Categories: FC<BlogCategoriesTypes> = ({
  activeCategory,
  handleActive,
  categories,
  setFilteredData,
}) => {
  const { mainConfig } = useBlockSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );
  const classes = useBlogCategories(mainConfig as CustomThemeProps);

  const displayCategories = () => {
    return categories?.map((category, index: number) => {
      const activeColor = activeCategory?.name === category.name;

      return (
        <div
          className={clx(classes.category, { activeColor }, 'text')}
          key={index}
          onClick={() => {
            setFilteredData(undefined);
            handleActive(
              category?.type ?? '',
              category?.name,
              category?.id,
              category?.description
            );
          }}
        >
          <span>{category?.name}</span>
          <span className={classes.quantity}>{`(${category?.quantity})`}</span>
        </div>
      );
    });
  };

  return (
    <section className={classes.blogWrapper}>{displayCategories()}</section>
  );
};
