import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock15Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      padding: theme.spacing(4, 0),

      '& .getHeader': {
        textAlign: 'center',
        color: theme.kiamoniDesign.colors.neutralWhite,
        
        '& h1': {
          fontSize: theme.kiamoniDesign.typography.fontSize + 8,
        },

        [theme.breakpoints.up('sm')]: {
          '& h1': {
            fontSize: theme.kiamoniDesign.typography.fontSize + 12,
          },
        },
      },

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(8, 0),
      },
    }),
    headerContainer: (props) => ({
      color: props?.colors?.[800],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      '& svg': {
        color: props?.colors?.[800],
      },
      width: '100%',
      padding: theme.spacing(5),
      fontSize: theme.kiamoniDesign.typography.h5,
      fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
      '& .cardSize': {
        width: '50%',
      },
      [theme.breakpoints.down('lg')]: {
        paddingTop: theme.spacing(5),
        padding: 0,
        width: '100%',
        fontSize: theme.kiamoniDesign.typography.h6,
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: '0 !important',
        fontSize: theme.kiamoniDesign.typography.h6,
        width: '80%',
      },
      '& .price': {
        color: props?.colors?.[500],
      },
    }),
    block15ActiveElement: {
      border: `1px dashed ${theme.kiamoniDesign.colors.neutralWhite}`,
    },
    header: {
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(-3.5),
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
    container: {
      margin: 'auto',
      width: '85%',
      display: 'grid',
      gridTemplateColumns: '25% 70%',
      gap: '5%',
      justifyContent: 'center',
      textAlign: 'center',

      [theme.breakpoints.down('lg')]: {
        width: '90%',
        gap: '8%',
      },

      [theme.breakpoints.down(630)]: {
        gridTemplateColumns: '1fr',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '5% !important',
      },
    },
    dividingLine: (props) => ({
      height: '350px',
      alignSelf: 'center',
      background: props?.colors?.[700],
      width: '1px',
      [theme.breakpoints.down('sm')]: {
        height: '1px',
        width: '100%',
      },
    }),
    subHeader: (props) => ({
      color: props?.colors?.[100],
      width: '100%',
      textAlign: 'left',

      [theme.breakpoints.down('sm')]: {
        marginBottom: '5vh',
      },
    }),
    subHeaderItems: (props) => ({
      paddingBottom: theme.spacing(1),
      fontSize: theme.kiamoniDesign.typography.fontSize + 4,
      color: props?.colors?.[600],
      lineHeight: '24px',

      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
    }),
    headerText: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h3,
      margin: 'auto',
      fontFamily: props?.fonts?.heading,
      paddingBottom: theme.spacing(3),

      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        paddingBottom: theme.spacing(1),
      },

      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    }),
    continueButton: {
      padding: theme.spacing(2, 0),
      cursor: 'pointer',
      fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    buttonDivider: (props) => ({
      width: '100%',
      height: '1px',
      background: props?.colors?.[700],
      margin: theme.spacing(2, 0),
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
    bottomLine: (props) => ({
      width: '100%',
      height: '2px',
      background: props?.colors?.[500],
      margin: theme.spacing(6, 0),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3),
      },
    }),
    orderContainer: {
      display: 'grid',
      gap: theme.spacing(4.2),
    },
  })
);
