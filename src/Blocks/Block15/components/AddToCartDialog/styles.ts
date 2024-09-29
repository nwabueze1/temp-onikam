import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useKiamoniBlock15Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      fontFamily: props?.fonts?.body,
    }),
    headerContainer: (props) => ({
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),

      color: props?.colors?.[800],
      '& svg': {
        color: props?.colors?.[800],
      },
      width: '100%',
      fontSize: '18px',
      fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
      '& .cardSize': {
        width: '50%',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        top: 16,
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      '& .price': {
        color: props?.colors?.[500],
      },
    }),
    header: {
      display: 'flex',
      alignItems: 'center',

      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    headerText: {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    headerWrapper: {
      width: '100%',
      display: 'grid',
      justifyItems: 'center',
      gap: theme.spacing(4),
    },
    modalContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      [theme.breakpoints.down(550)]: {
        flexDirection: 'column',
      },
    },
    dividingLine: (props) => ({
      height: '350px',
      alignSelf: 'center',
      background: props?.colors?.[700],
      width: '1px',
      [theme.breakpoints.down(550)]: {
        height: '1px',
        width: '100%',
      },
    }),
    subHeader: (props) => ({
      color: props?.colors?.[100],
      width: '50%',
      padding: theme.spacing(3.8),
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        padding: theme.spacing(1.3),
      },
    }),
    subHeaderItems: {
      paddingBottom: theme.spacing(1),
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,

      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    subHeaderText: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      lineHeight: '21px',

      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    continueButton: (props) => ({
      color: props?.colors?.[800],
      padding: theme.spacing(2, 0),
      cursor: 'pointer',
      fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    }),
    buttonDivider: (props) => ({
      width: '100%',
      height: '1px',
      background: props?.colors?.[700],
      margin: theme.spacing(2, 0),
    }),
    checkoutbutton: {
      height: '40px',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(1),
      },
    },
    buttonText: {
      fontSize: theme.kiamoniDesign.typography.fontSize,
    },
    metaData: (props) => ({
      color: props?.colors?.[100],
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
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
    addToCartName: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 4,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      marginBottom: theme.spacing(0.5),

      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
    },
    addToCartPrice: {
      color: (props) => props?.colors?.[500],
      fontSize: theme.kiamoniDesign.typography.fontSize + 4,
      marginBottom: theme.spacing(1),
    },
    optionArray: {
      width: '100%',
      boxSizing: 'border-box',
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    optionItem: {
      marginBottom: theme.spacing(1),
      display: 'flex',
      justifyContent: 'center',
      gap: theme.spacing(1),
    },
    optionName: {
      paddingRight: theme.spacing(0.5),
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(1),
    },
    optionTypes: (props) => ({
      display: 'flex',
      gap: theme.spacing(1.3),
      flexWrap: 'wrap',
      color: props?.colors?.[500],
    }),
  })
);
