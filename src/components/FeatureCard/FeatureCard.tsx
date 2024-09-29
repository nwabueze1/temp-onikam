import { useFeatureCardStyles } from './styles';
import {
  BlockProviderProps,
  DishCard,
  useBlockSelector,
} from '../../components';
import { CustomThemeProps } from '../../types';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai';
import clx from 'classnames';
import { FC, useState } from 'react';
import { FeatureCardProps } from './types';
import { createResponsiveImage } from '../../helper';

export const FeatureCard: FC<FeatureCardProps> = ({
  rating,
  dish,
  price,
  dishName,
  hasSearch,
  favorite,
  link,
  currency,
  hasStar = false,
  hasFavorite = false,
  mode,
  className,
  screenSize
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useFeatureCardStyles(mainConfig as CustomThemeProps);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const toggleFavourite = () => setIsFavorite(!isFavorite);

  return (
    <div
      className={clx(classes.card, 'cardShadow', className)}
      data-info={'card'}
    >
      <div className={clx(classes.dishCard)}>
        {hasFavorite && (
          <div className={classes.favorite} onClick={toggleFavourite}>
            {isFavorite ? (
              <AiFillHeart className={'fill'} />
            ) : (
              <AiOutlineHeart className={'outline'} />
            )}
          </div>
        )}
        <DishCard link={link} hasSearch={hasSearch} mode={mode}>
          {createResponsiveImage(dish, {
            className: classes.dishCardPictureImg,
            classNames: {
              picture: clx(classes.dishCardPicture, 'animate'),
            },
            screenSize,
          })}
        </DishCard>
      </div>
      <div className={classes.cardTextWrapper}>
        <div className={clx(classes.dishCardWrapper)}>
          <p className={clx(classes.dishCardText)}>{dishName}</p>
          {hasStar && (
            <div className={clx(classes.dishStar)}>
              {Array(5)
                .fill(0)
                .fill(1, 0, rating)
                .map((item, i) =>
                  item && item === 1 ? (
                    <AiFillStar key={i} />
                  ) : (
                    <AiOutlineStar key={i} />
                  )
                )}
            </div>
          )}
          <p className={clx(classes.dishCost, 'price')}>
            {currency} {price}
          </p>
        </div>
      </div>
    </div>
  );
};
