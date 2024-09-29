import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../types';
import { makeStyles } from '@mui/styles';

export const useCheckoutStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      background: props?.colors?.[200],
      padding: theme.spacing(8, 0),
    }),
    title: {
      margin: 0,
    },
    container: {
      width: '100%',
    },
    headerContainer: {
      display: 'grid',
      gridTemplateColumns: '53% 40%',
      gap: '0 7%',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
      },
    },
    formContainer: {
      width: '100%',
    },
    continueShopping: {
      width:"100%",
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: theme.spacing(5),
      [theme.breakpoints.down(800)]: {
        paddingBottom: theme.spacing(5),
      },
    },
    subTotal:{
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(7),
      }
    }
  })
);
