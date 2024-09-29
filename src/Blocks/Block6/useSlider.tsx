type TProps = {
  cards: any[];
  itemsPerSlide: number;
  itemsToSlide: number;
  isActive: boolean;
};
export const useSlider = (props: TProps) => {
  const { cards, itemsPerSlide, itemsToSlide, isActive } = props;

  const isInfinite = cards.length > itemsPerSlide;
  const INTERVAL_DURATION_IN_SECONDS = 4000;

  const settings = {
    dots: false,
    infinite: isInfinite,
    speed: 1000,
    slidesToShow: itemsPerSlide ?? 1,
    slidesToScroll: itemsToSlide ?? 1,
    arrows: false,
    autoplay: !isActive,
    autoplaySpeed: INTERVAL_DURATION_IN_SECONDS,
  };

  return {
    settings,
  };
};
