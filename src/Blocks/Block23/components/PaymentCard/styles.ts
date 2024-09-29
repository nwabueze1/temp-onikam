import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';
import { Theme } from '@mui/material';

export const usePaymentStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    container: (props) => ({
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      letterSpacing: '0.2px',
      '&.color': {
        background: `linear-gradient(to right, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      },
      padding: '10%',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4.5),
      },
    }),
    header: {
      fontSize: theme.kiamoniDesign.typography.h5,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      paddingBottom: theme.spacing(3.5),
      margin: 0,
      textTransform: 'capitalize',
    },
    buttonContainer: {
      width: '100%',
      height: '60px',
    },
    subTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: theme.kiamoniDesign.typography.h5,
      paddingBottom: theme.spacing(3.5),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      '& .right': {
        justifySelf: 'flex-end',
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        display: 'flex',
        gap: theme.spacing(0, 0.5),
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        },
      },
      '&.total': {
        fontSize: theme.kiamoniDesign.typography.h3,
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.h6,
        },
      },
    },
    dividedLine: (props) => ({
      width: '100%',
      height: '1px',
      '&.color': {
        background: props?.colors?.[100],
      },
      background: props?.colors?.[500],
      marginBottom: theme.spacing(3.5),
    }),
    bottomContainer: (props) => ({
      width: '100%',
      padding: '8%',
      boxSizing: 'border-box',
      background: props?.colors?.[300],
      textAlign: 'center',
      '&.other': {
        background: props?.colors?.[200],
      },
      fontSize: theme.kiamoniDesign.typography.h6,
      lineHeight: '150%',
      [theme.breakpoints.down('lg')]: {
        padding: '5%',
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    }),
  })
);
