import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useCarouselStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    carouselContainer: {
      display: 'flex',
      overflowX: 'scroll',
      margin: 'auto',

      '&::-webkit-scrollbar': {
        width: 0,
      },
    },
    buttonArrow: {
      color: 'white',
      padding: theme.spacing(1.875),
      borderRadius: '50%',
      backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowRight.svg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      '&.prev': {
        backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowLeft.svg')`,
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1.5),
      },
    },
    arrow: {
      background: (props) =>
        `linear-gradient(107.76deg, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      borderRadius: '50%',
    },
    keenSlider: {
      position: 'relative',
    },
    carouselSlide: {
      width: '100%',
      display: 'flex',
      overflow: 'hidden',
      '&.carousel4': {
        width: '25px',
      },
    },
    carouselPrevious: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      zIndex: 3,
      '&.changeDirection': {
        position: 'absolute',
        top: 0,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    sliderButton: {
      cursor: 'pointer',
      height: 30,
      width: 30,
      borderRadius: 30,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 'none',
      border: 'none',
      margin: 'auto',
      background: (props) =>
        `linear-gradient(107.76deg, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      position: 'absolute',
      left: -20,
      top: '45%',
      zIndex: 10,
      '&.right': {
        left: 'unset',
        right: -20,
      },
      [theme.breakpoints.up('lg')]: {
        left: -54,
        '&.right': {
          left: 'unset',
          right: -54,
        },
      },
    },
    sliderButtonRegular: {
      position: 'static',
      left: 'unset',
      right: 'unset',
      top: 'unset',
      '&.hidden': {
        visibility: 'hidden',
      },
    },
    sliderIcon: {
      fill: theme.kiamoniDesign.colors.neutralWhite,
      fontSize: theme.typography.fontSize + 10,
    },
    carouselNext: {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: 3,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '&.changeDirection': {
        position: 'absolute',
        top: 0,
        left: '15%',
      },
    },
    pointers: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      cursor: 'pointer',

      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1),
      },
    },
    pointerImg: {
      width: '13px',
      height: '13px',
    },
    pointerImgActive: {
      width: '13px',
      height: '13px',
    },
    arrowContainer: {
      display: 'none',
      justifyContent: 'space-between',
      width: '100%',
      '&.hasArrow': {
        display: 'flex',
      },
    },
    dot: {
      '&> li': {
        '& > button': {
          '&:before': {
            color: 'white',
            fontSize: theme.typography.fontSize - 4,
          },
        },
        '&.slick-active': {
          '& > button': {
            '&:before': {
              color: 'white',
              fontSize: theme.typography.fontSize - 2,
            },
          },
        },
      },
    },
  })
);
