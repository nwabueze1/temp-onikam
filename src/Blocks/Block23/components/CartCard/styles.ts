import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';
import { Theme } from '@mui/material';

export const useCartCard = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      background: props?.colors?.[300],
      padding: theme.spacing(2, 1),
      boxSizing: 'border-box',
      alignSelf: 'flex-start',
    }),
    container: {
      display: 'grid',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      gridTemplateColumns: '30% 30% 15% 20%',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '35% 25% 15% 18%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
      },
    },
    otherInfo: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5, 0),
      fontSize: theme.kiamoniDesign.typography.fontSize,
    },
    selectionContainer: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    purchaseIncrement: (props) => ({
      display: 'grid',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gridTemplateColumns: 'repeat(2,1fr)',
      border: `1px solid ${props?.colors?.[700]}`,
      color: props?.colors?.[100],
    }),
    quantityContainer: (props) => ({
      padding: '0 20%',
      borderLeft: `1px solid ${props?.colors?.[800]}`,
      borderRight: `1px solid ${props?.colors?.[800]}`,
      boxSizing: 'border-box',
    }),
    incrementIcons: {
      display: 'grid',
    },
    icon: (props) => ({
      border: `1px solid ${props?.colors?.[700]}`,
      cursor: 'pointer',
    }),
    dishCardImg: {
      margin: 'auto',
      padding: '39%',
      boxSizing: 'border-box',
      backgroundPosition: 'center',
      borderRadius: '50%',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    priceContainer: {
      fontSize: theme.kiamoniDesign.typography.h6,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    optionContainer: (props) => ({
      display: 'flex',
      gap: theme.spacing(0.5, 0),
      justifyItems: 'flex-start',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      color: props?.colors?.[600],
    }),
    optionName: {
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    selectionName: {
      paddingLeft: theme.spacing(0.5),
    },
    dishInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.7, 0),
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    title: {
      margin: 0,
      fontSize: theme.kiamoniDesign.typography.h6,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    loader: {
      width: '15px',
      height: '15px',
      borderRadius: '100%',
      borderLeft: (props) => `3px solid ${props?.colors?.[500]}`,
      border: '3px solid transparent',
      animation: '$spinner 1s linear infinite',
    },
    '@keyframes spinner': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    orderQuantity: {
      textAlign: 'center',
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
  })
);
