import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useDrawerStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    mobileNav: {
      height: '100vh',
      position: 'fixed',
      top: 0,
      minWidth: '400px',
      transition: 'all 0.5s',
      display: 'none',
      width: '30%',
      zIndex: 10,
      [theme.breakpoints.down('lg')]: {
        width: '40%',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: '300px',
      },
    },
    displayMobileNav: (props) => ({
      '&.layout_1, &.layout_3, &.layout_4, &.layout_5': {
        left: 0,
      },
      '&.layout_2': {
        right: 0,
      },
      left: 0,
      display: 'block',
      background: props?.colors?.[600],
      zIndex: 999,
    }),
    mobileNavHeader: {
      width: '100%',
      height: '66px',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    closeIcon: (props) => ({
      display: 'flex',
      alignSelf: 'center',
      width: '18px',
      height: '18px',
      padding: theme.spacing(0.6),
      cursor: 'pointer',
      background: props?.colors?.[300],
      marginRight: theme.spacing(2.75),
    }),
    searchWrapper: {
      borderBottom: `1px solid ${theme.kiamoniDesign.colors.neutralWhite}`,
      display: 'flex',
      flexGrow: 0.2,
      [theme.breakpoints.down('lg')]: {
        width: '35px',
        borderBottom: '0',
        flexGrow: 0,
      },
      '&.searchPop': {
        [theme.breakpoints.down('sm')]: {
          borderBottom: '1px solid white !important',
          width: '80%',
          margin: 'auto',
        },
      },
      '&.mobile__search-wrapper': {
        borderBottom: '1px solid white',
        width: '80%',
        margin: theme.spacing('auto', 'auto'),
        marginBottom: theme.spacing(6),
      },
      '&.layout_2': {
        order: 3,
        [theme.breakpoints.down('sm')]: { border: 0, flexGrow: 0 },
      },
      '&.layout_3': {
        borderBottom: '1px solid white',
        [theme.breakpoints.down('lg')]: {
          flexGrow: 0.6,
          borderBottom: '1px solid white !important',
        },
        [theme.breakpoints.down('sm')]: { border: '0 !important', flexGrow: 0 },
      },
      '&.layout_4, &.layout_5': {
        flexGrow: 0.6,
        order: 2,
        [theme.breakpoints.down('lg')]: { borderBottom: '1px solid white ' },
      },
      '&.layout_4': {
        [theme.breakpoints.down('sm')]: {
          width: '40px',
          borderBottom: '0 !important',
          flexGrow: 0,
        },
        [theme.breakpoints.between('sm', 'md')]: {
          flexGrow: '.6 !important',
          borderBottom: '1px solid white !important ',
        },
      },
      '&.layout_5': {
        [theme.breakpoints.between('sm', 'md')]: {
          flexGrow: '.6 !important',
          borderBottom: '1px solid white !important ',
        },
        [theme.breakpoints.down('sm')]: {
          position: 'absolute',
          top: '72px',
          width: '90%',
        },
      },
    },
    searchIcon: (props) => ({
      color: props?.colors?.[200],
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontFamily: props?.fonts?.body,
      fontWeight: theme.kiamoniDesign.typography.fontWeightBold,
      cursor: 'pointer',
      padding: theme.spacing(0.625),
      '& svg': {
        width: '18px',
        height: '18px',
      },
      '&.layout_2': {
        [theme.breakpoints.down('lg')]: { right: '150px' },
        [theme.breakpoints.down('sm')]: { right: '160px' },
      },
      [theme.breakpoints.down('sm')]: {
        right: '120px',
      },
      '&.layout_3': {
        [theme.breakpoints.down('lg')]: { right: '312px' },
        [theme.breakpoints.down('sm')]: { display: 'block' },
      },
      '&.layout_4': {
        [theme.breakpoints.down('lg')]: { left: '310px' },
        [theme.breakpoints.down('sm')]: { display: 'block' },
        [theme.breakpoints.down('xs')]: {
          left: '265px',
          display: 'block',
        },
      },
      '&.layout_5': {
        [theme.breakpoints.down('lg')]: { left: '310px' },
        '&.layout_5': {
          [theme.breakpoints.down('sm')]: {
            left: '45px',
            display: 'block !important',
            top: '78px !important',
            marginTop: theme.spacing(0.875),
          },
        },
      },
    }),
    cancelText: (props) => ({
      width: '10px',
      height: '10px',
      marginTop: theme.spacing(1.125),
      borderRadius: '50%',
      padding: theme.spacing(0.375),
      background: props?.colors?.[300],
      cursor: 'pointer',
      '&.layout_5': {
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(1.875),
        },
      },
    }),
    drawerOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      opacity: 0,
      zIndex: -1,
      background: 'rgba(0, 0, 0, 0.3)',
    },
    drawerOverlayActive: {
      opacity: 1,
      zIndex: 5,
    },
    hideDrawerOverlay: {
      display: 'none',
    },
  })
);
