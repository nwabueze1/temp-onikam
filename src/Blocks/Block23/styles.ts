import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../types';
import { makeStyles } from '@mui/styles';
import { getResponsiveFontSize } from '../../helper/getResponsiveFontSize';

export const useKiamoniBlock23Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      fontSize: props?.fonts?.body,
      background: props?.colors?.[200],
      padding: theme.spacing(7, 0),
      fontFamily: props?.fonts?.body,
    }),
    container: {
      maxWidth: theme.kiamoniStyles.maxWidth,
      width: '85%',
      margin: 'auto',
      '& .loader': {
        margin: 'auto',
      },
    },
    checkoutContainer: {
      display: 'grid',
      justifyContent: 'space-between',
      gridTemplateColumns: '60% 35%',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '1fr',
        width: '90%',
      },
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
        width: '100%',
      },
    },
    closeButton: {
      border: 'none',
      padding: theme.spacing(1, 2),
      cursor: 'pointer',
      position: 'absolute',
      right: '-24px',
      top: '-16px',
      [theme.breakpoints.down('sm')]: {
        right: '-15px',
        top: '-13px',
        padding: theme.spacing(0.5, 0.7),
      },
    },
    cartCard: {
      position: 'relative',
      paddingBottom: theme.spacing(3),
    },
    loader: {
      width: '40px',
      height: '40px',
      borderRadius: '100%',
      borderLeft: (props) => `3px solid ${props?.colors?.[500]}`,
      border: '3px solid transparent',
      animation: '$spinner 1s linear infinite',
    },
    continueShopping: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      cursor: 'pointer',
      width: '200px',
      paddingTop: theme.spacing(3),
      '& a': {
        color: (props) => props?.colors?.[100],
        textDecoration: 'none',
      },
    },
    '@keyframes spinner': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    emptyStyle: {
      maxWidth: theme.kiamoniStyles.maxWidth,
      width: '85%',
      margin: 'auto',
      display: 'grid',
      [theme.breakpoints.down('lg')]: {
        width: '90%',
      },
    },
    imageGif: {
      textAlign: 'center',
      justifySelf: 'center',
      '& img': {
        width: '507px',
        height: '507px',
        [theme.breakpoints.down('lg')]: {
          width: '254px',
          height: '254px',
        },
        [theme.breakpoints.down('sm')]: {
          width: '120px',
          height: '120px',
        },
      },
    },
    cartText: {
      width: '744px',
      [theme.breakpoints.down('lg')]: {
        width: '553px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '300px',
      },
    },
    cartTextHeader: {
      paddingTop: theme.spacing(2.5),
      fontSize: getResponsiveFontSize(14, 26),
    },
    cartTextDescriptions: {
      paddingTop: theme.spacing(2.5),
      fontSize: getResponsiveFontSize(10, 18),
      letterSpacing: '0.2px',
      lineHeight: '150%',
    },
    shoppingCart: (props) => ({
      fontSize: getResponsiveFontSize(18, 36),
      fontFamily: props?.fonts?.body,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    }),
    paymentKeyValue: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textTransform: 'capitalize',
      paddingBottom: theme.spacing(3),
      '& .bold': {
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      },
      '&.increaseFont': {
        fontSize: theme.kiamoniDesign.typography.h5,
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.h6,
        },
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.fontSize + 2,
      },
    },
    paymentAccountDetails: (props) => ({
      paddingTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      borderBottom: `1px solid ${props?.colors?.[100]}`,
      borderTop: `1px solid ${props?.colors?.[100]}`,
    }),
  })
);
