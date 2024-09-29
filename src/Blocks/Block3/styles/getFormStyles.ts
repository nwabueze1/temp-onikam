import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../types';

export const useGetFormStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    footerInput: () => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: theme.spacing(1),
      alignItems: 'start',
      '& input': {
        color: theme.kiamoniDesign.colors.neutralBlack,
        background: theme.kiamoniDesign.colors.neutralWhite,
        padding: theme.spacing(2.25, 2.5),
        fontSize: theme.typography.fontSize + 2,
      },
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        minWidth: '100%',
        gap: 'unset',
      },
      '& form': {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
          width: 'unset',
        },
      },
    }),
    footerInputButton: (props) => ({
      background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
      outline: 0,
      border: 0,
      fontSize: theme.kiamoniDesign.typography.fontSize,
      color: props?.colors?.[200],
      cursor: 'pointer',
      padding: theme.spacing(2),
      fontFamily: props?.fonts?.body,
      '&:disabled': {
        cursor: 'not-allowed',
      },
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(2.5, 3.5),
        width: 'unset',
      },
    }),
    footerInputBottom: {},
    error: (props) => ({
      margin: 'auto',
      color: `${props?.colors?.[700]} !important`,
      gridColumn: '1/-1',
      marginTop: `${theme.spacing(1.3)} !important`,
      textAlign: 'center',
      justifyContent: 'center !important',
    }),
    success: (props) => ({
      textAlign: 'center',
      width: '80%',
      margin: 'auto',
      color: `${props?.colors?.[600]} !important`,
      justifyContent: 'center !important',
      marginTop: `${theme.spacing(1.3)} !important`,
      background: props?.colors?.[200],
      opacity: '95%',
      padding: theme.spacing(1.25, 3.75),
      borderRadius: '10px',
      '&.loading': {
        color: `${props?.colors?.[300]} !important`,
      },
    }),
    inputContainer: {
      padding: 0,
      borderRadius: 0,
      border: (props) => `.5px solid ${props?.colors?.[400]}`,
    },
    flashing: {
      animation: '$flash 1s linear infinite',
    },
  })
);
