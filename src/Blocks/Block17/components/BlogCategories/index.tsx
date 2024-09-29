import { CustomThemeProps } from '../../../../types';
import { useBlogCategories } from './styles';
import clx from 'classnames';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { BlogCategoriesTypes } from '../../types';
import { FC } from 'react';

export const BlogCategories: FC<BlogCategoriesTypes> = ({
  activeCategory,
  handleActive,
  categories,
}) => {
  const { mainConfig } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useBlogCategories(mainConfig as CustomThemeProps);

  const displayCategories = () => {
    return categories?.map((category, index: number) => {
      const activeColor = activeCategory.name === category.name;

      return (
        <div
          className={clx(classes.category, { activeColor })}
          key={index}
          onClick={() => {
            handleActive(category?.type ?? '', category?.name, category?.uuid);
          }}
          data-info={"category"}
        >
          {category?.name?.charAt(0)?.toUpperCase() +
            category?.name?.slice(1)?.toLowerCase()}
        </div>
      );
    });
  };

  return (
    <section className={classes.blogWrapper}>{displayCategories()}</section>
  );
};
