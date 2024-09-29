import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useOptionConfigStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    optionBlock: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2, 4),
    },
    subTotal: {
      fontFamily: (props) => props?.fonts?.body,
    },
    subtotalDescription: {
      padding: theme.spacing(0.8, 0, 2),
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 4,
      },
    },
    optionBlockName: (props) => ({
      border: `0.7px solid ${props?.colors?.[600]}`,
      cursor: 'pointer',
      fontSize: theme.kiamoniDesign.typography.fontSize - 1,
      color: props?.colors?.[900],
      padding: theme.spacing(0.8, 1.5),
      '&.hasColor': {
        border: `0.7px solid ${props?.colors?.[500]}`,
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 4,
      },
    }),
    priceContainer: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h3,
      color: props?.colors?.[500],
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 8,
      },
    }),
    purchaseText: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h5,
      color: props?.colors?.[600],
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        paddingBottom: theme.spacing(3),
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    }),
    purchaseIncrement: (props) => ({
      display: 'grid',
      width: '150px',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gridTemplateColumns: 'repeat(2,1fr)',
      border: `1px solid ${props?.colors?.[600]}`,
    }),
    incrementIcons: {
      display: 'grid',
      flexDirection: 'column',
    },
    icon: (props) => ({
      border: `1px solid ${props?.colors?.[600]}`,
      cursor: 'pointer',
    }),
    incrementContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: theme.kiamoniDesign.typography.fontSize,
      padding: theme.spacing(0, 4),
      display: 'flex',
      gap: theme.spacing(1),
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
    orderButton: {
      width: '150px',
      height: '46px',
      paddingTop: theme.spacing(5),
    },
    checkoutButton: {
      padding: theme.spacing(0, 2),
      height: '46px',

      '& .spinner': {
        width: '10px',
        height: '10px',
        border: `2px solid white`,
        borderTop: `2px solid transparent`,
        borderRadius: '50%',
        animation: '$spin 1s linear infinite',
        margin: theme.spacing(2.5, 'auto'),
      },
    },
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      }
    },
    header: {
      fontSize: theme.kiamoniDesign.typography.h6,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
  })
);
