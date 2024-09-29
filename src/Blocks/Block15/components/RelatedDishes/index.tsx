import {
  useBlockSelector,
  BlockProviderProps,
  BlockProvider,
} from '../../../../components';
import { useRelatedDishes } from './styles';
import { FC } from 'react';
import { RelatedDishesProps } from './types';
import { FeatureCard } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { getCurrency } from '../../../../helper';

export const RelatedDishes: FC<RelatedDishesProps> = ({
  title,
  relatedMenuData,
  mode,
  currency,
}) => {
  const { mainConfig, block_uuid } = useBlockSelector<
    BlockProviderProps,
    BlockProviderProps
  >((state) => state);
  const classes = useRelatedDishes(mainConfig as CustomThemeProps);

  const getDishes = (hasSearch: boolean) => {
    return relatedMenuData?.map((item, i: number) => (
      <div key={i} className={'cardBorder'}>
        <FeatureCard
          rating={5}
          dish={item?.image}
          price={item?.price}
          dishName={item?.name}
          hasSearch={hasSearch}
          favorite={true}
          link={item?.slug}
          mode={mode}
          currency={getCurrency(currency)}
        />
      </div>
    ));
  };

  return (
    <BlockProvider mainConfig={mainConfig} block_uuid={block_uuid}>
      <article className={classes.root}>
        <h1 className={classes.header}>{title}</h1>
        <div className={classes.dishContainer}>{getDishes(false)}</div>
      </article>
    </BlockProvider>
  );
};
