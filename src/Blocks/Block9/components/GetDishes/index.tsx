import { FeatureCard } from '../../../../components';
import { CoreMenuItemFields } from '../../../../models';

export const GetDishes = ({
  items,
  getCurrencySymbol,
  mode
}: {
  items: CoreMenuItemFields[];
  getCurrencySymbol: string;
  mode: 'view' | 'edit';
}) => {
  return (
    <>
      {items?.map((item, index: number) => {
        return (
          <div key={index} className={'cardBorder'}>
            <FeatureCard
              rating={5}
              dish={item?.image}
              price={item?.price}
              dishName={item?.name}
              favorite={true}
              link={item?.slug}
              hasSearch={false}
              currency={getCurrencySymbol}
              mode={mode}
            />
          </div>
        );
      })}
    </>
  );
};
