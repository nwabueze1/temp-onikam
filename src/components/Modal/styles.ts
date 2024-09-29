import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useModalStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    modal: {
      position: 'fixed',
      top: '5%',
      left: '5%',
      right: 'unset',
      bottom: 'unset',
      width: '95%',
      height: '95%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      animation: '$slideLeft 0.5s ease',
      zIndex: 10,

      '&.TopRight': {
        right: '5%',
        left: 'unset',
        animation: '$slideRight 0.5s ease',
        justifyContent: 'flex-end',
      },
      '&.BottomRight': {
        right: '5%',
        left: 'unset',
        top: 'unset',
        bottom: '5%',
        animation: '$slideRight 0.5s ease',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      '&.BottomLeft': {
        right: 'unset',
        left: '5%',
        top: 'unset',
        bottom: '5%',
        animation: '$slideLeft 0.5s ease',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      },
    },
    modalContent: (props) => ({
      backgroundColor: props?.colors?.[200],
      boxShadow: theme.kiamoniDesign.shadows[7],
      position: 'absolute',
      width: '40%',
      height: 'fit-content',
      [theme.breakpoints.down('lg')]: {
        width: '70%',
      },
      [theme.breakpoints.down('md')]: {
        width: '80%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '60%',
      },
    }),
    closeButton: (props) => ({
      backgroundColor: props?.colors?.[200],
      border: 'none',
      padding: theme.spacing(0.5),
      cursor: 'pointer',
      position: 'absolute',
      right: '-16px',
      top: '-12px',
      [theme.breakpoints.down('sm')]: {
        right: '-15px',
        top: '-13px',
        padding: theme.spacing(0.5, 0.7),
      },
    }),
    '@keyframes slideLeft': {
      from: {
        left: '-50%',
      },
      to: {
        left: '5%',
      },
    },
    '@keyframes slideRight': {
      from: {
        right: '-50%',
        overflow: 'hidden',
      },
      to: {
        right: '5%',
        overflow: 'hidden',
      },
    },
    modalOverlay: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      backgroundColor: theme.kiamoniDesign.background.overlay200,
      overflow: 'hidden',
    },
  })
);
