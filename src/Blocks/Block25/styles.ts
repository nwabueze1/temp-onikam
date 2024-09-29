import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock25Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      background: props?.colors?.[200],
      fontFamily: props?.fonts?.body,
    }),
    container: {
      width: '85%',
      margin: 'auto',
      padding: theme.spacing(18.5, 0),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(15, 0, 12.5, 0),
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    box: {
      width: '60%',
      margin: 'auto',
      [theme.breakpoints.down('lg')]: {
        width: '80%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '& h1': {
        fontSize: theme.typography.fontSize + 36,
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.typography.fontSize + 24,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.typography.fontSize + 20,
        },
      },
      '& img': {
        position: 'absolute',
        top: 0,
        objectFit: 'cover',
        width: '100%',
      },
      '& p': {
        fontSize: theme.typography.fontSize + 8,
        textAlign: 'center',
        padding: theme.spacing(2, 0),
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.typography.fontSize + 8,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.typography.fontSize + 4,
        },
      },
    },
    imgContainer: {
      position: 'relative',
      marginTop: theme.spacing(8),
      height: 459,
      [theme.breakpoints.down('lg')]: {
        height: 395,
        marginTop: theme.spacing(6),
      },
      [theme.breakpoints.down('sm')]: {
        height: 208,
        marginTop: theme.spacing(3),
      },
    },
  })
);
