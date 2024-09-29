import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../types';
import { getResponsiveFontSize } from '../../helper/getResponsiveFontSize';

export const useBlock3Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  baseRootActive: {
    border: '1px dashed white',
  },
  root: (props) => ({
    background: props?.colors?.[300],
    padding: theme.spacing(5, 0),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10, 0),
    },
  }),
  menuRoot: {
    background: (props) => props?.colors?.[200],
  },
  menuBlock: {
    width: '85%',
    maxWidth: theme.kiamoniStyles.maxWidth,
    margin: '0 auto',
    padding: theme.spacing(5, 0),
    display: 'grid',
    gap: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(10),
      gridTemplateColumns: '1fr 2fr',
      alignItems: 'center',
    },
  },
  menuHeader: {
    display: 'grid',
    gap: theme.spacing(2),
  },
  menuTitle: {
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    fontSize: getResponsiveFontSize(
      theme.typography.fontSize + 10,
      theme.typography.fontSize + 20
    ),
    fontWeight: theme.typography.fontWeightMedium,
    margin: 0,
  },
  menuSubtitle: (props) => ({
    color: props?.colors?.[400],
    fontSize: getResponsiveFontSize(
      theme.typography.fontSize,
      theme.typography.fontSize + 2
    ),
    fontFamily: props?.fonts?.body,
    margin: 0,
  }),
  container: {
    width: '85%',
    margin: '0 auto',
    maxWidth: theme.kiamoniStyles.maxWidth,
  },
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'content-box',
    alignItems: 'start',
    gap: theme.spacing(3.75),
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  baseB: {
    display: 'grid',
    gap: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: theme.spacing(10),
    },
  },
  logoContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    '&.layout-1, &.layout-2': {
      [theme.breakpoints.up('md')]: {
        width: '50%',
        alignItems: 'start',
      },
      [theme.breakpoints.up('lg')]: {
        width: '100%',
        alignItems: 'center',
      },
    },
    '&.layout-3, &.layout-4, &.layout-5': {
      order: 'unset',
      width: 'unset',
    },
  },
  footerLink: {
    order: 2,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30%',
      '&.first': {
        order: 0,
        width: '35%',
        '&.layout-3, &.layout-4, &.layout-5': {
          order: 'unset',
          width: 'unset',
        },
      },
      '&.layout-3, &.layout-4, &.layout-5': {
        order: 'unset',
        width: 'unset',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%',
      '&.first': {
        order: 0,
        width: '25%',
        '&.layout-3, &.layout-4, &.layout-5': {
          order: 'unset',
          width: 'unset',
        },
      },
      '&.layout-3, &.layout-4, &.layout-5': {
        order: 'unset',
        width: 'unset',
      },
    },
    '&.layout-3, &.layout-4, &.layout-5': {
      order: 'unset',
      width: 'unset',
    },
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    order: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '45%',
      flexWrap: 'wrap',
      '&.layout-3, &.layout-4, &.layout-5': {
        alignItems: 'start',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%',
      '&.layout-3, &.layout-4, &.layout-5': {
        alignItems: 'center',
      },
    },
    '&.layout-3, &.layout-4, &.layout-5': {
      order: 'unset',
      width: 'unset',
    },
  },
  logoImage: {
    maxWidth: '50%',
    objectFit: 'contain',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      maxWidth: 243,
    },
  },
  logoText: {
    margin: 0,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[100],
    fontSize: getResponsiveFontSize(
      theme.typography.fontSize,
      theme.typography.fontSize + 2
    ),
  },
  scheduleContainer: {
    order: 1,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25%',
      '&.layout-1, &.layout-2': {
        width: '35%',
      },
      '&.layout-3': {
        width: '30%',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%',
      '&.layout-1': {
        width: '25%',
      },
      '&.layout-3, &.layout-2': {
        width: '25%',
      },
    },
    '&.layout-3, &.layout-4, &.layout-5': {
      order: 'unset',
      width: 'auto',
    },
  },
  socialMediaIconsContainer: {
    display: 'flex',
    gap: theme.spacing(2.5),
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    '&.layout-5, &.layout-4, &.layout-3, &.layout-1': {
      justifyContent: 'space-between',
    },
  },
  socialMediaIcon: {
    stroke: (props) => props?.colors?.[100],
    fontSize: theme.typography.fontSize + 16,
  },
  socialBContainer: {
    display: 'grid',
    gap: theme.spacing(1.5),
  },
  socialMediaIconContainer: {
    display: 'inline-flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: getResponsiveFontSize(
      theme.typography.fontSize,
      theme.typography.fontSize + 2
    ),
    textTransform: 'capitalize',
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[400],
    flex: 1,
  },
}));
