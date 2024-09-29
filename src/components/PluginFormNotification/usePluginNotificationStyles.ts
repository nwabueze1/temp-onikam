import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const usePluginNotificationStyles = makeStyles((theme: Theme) => ({
  successContainer: {
    maxWidth: 582,
    padding: theme.spacing(4),
    borderRadius: 12,
    background: theme.kiamoniDesign.colors.neutral700,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(1),
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: 572,
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1440,
      padding: theme.spacing(23, 30),
    },
    fontFamily: theme.kiamoniDesign.font.montserrat,
  },
  successImage: {
    margin: '0 auto',
    display: 'block',
    width: '40%',
    height: 'auto',
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
  },
  successTitle: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.kiamoniDesign.font.montserrat,
    color: theme.kiamoniDesign.colors.neutralWhite,
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize + 18,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize + 20,
    },
  },
  successMessage: {
    lineHeight: '150%',
    fontSize: theme.typography.fontSize - 2,
    color: theme.kiamoniDesign.colors.neutral100,
    letterSpacing: 0.2,
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize + 2,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize + 4,
      maxWidth: 492,
    },
  },
  errorContainer: {
    background: theme.kiamoniDesign.colors.neutral700,
    maxWidth: 362,
    padding: theme.spacing(1.4, 2),
    borderRadius: 12,
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `1px solid ${theme.kiamoniDesign.colors.neutral500}`,
    zIndex: 1,
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 6),
      maxWidth: 700,
      minWidth: 500,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1232,
      minWidth: 700,
    },
  },
  errorText: {
    fontSize: theme.typography.fontSize - 2,
    lineHeight: '150%',
    letterSpacing: 0.2,
    fontFamily: theme.kiamoniDesign.font.montserrat,
    color: theme.kiamoniDesign.colors.neutralWhite,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize + 2,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  closeIcon: {
    cursor: 'pointer',
    color: theme.kiamoniDesign.colors.neutralWhite,
    fontSize: theme.typography.fontSize + 18,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize + 10,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
}));
