import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useInputStyles = makeStyles((theme: Theme) => ({
  textInput: {
    display: 'flex',
    width: '100%',
    '& img': {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      alignSelf: 'center',
    },
  },
  input__search: {
    width: '100%',
    color: theme.kiamoniDesign.colors.neutralWhite,
    fontSize: theme.kiamoniDesign.typography.fontSize + 2,
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.kiamoniDesign.typography.fontSize,
    },
    fontFamily: 'inherit',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    '&::placeholder': {
      color: theme.kiamoniDesign.colors.neutralWhite,
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        color: 'transparent',
      },
    },
    '&.input__variant': {
      '&::placeholder': {
        color: theme.kiamoniDesign.colors.neutral500,
      },
    },
    '&.layout_3, &.layout_4, &.layout_5': {
      [theme.breakpoints.down('lg')]: {
        display: 'block',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '&.layout_5': {
      [theme.breakpoints.down('sm')]: {
        display: 'block !important',
        top: '97px !important',
        width: '290px !important',
      },
    },
  },
  cancelText: {
    width: '10px',
    height: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: '50%',
    padding: theme.spacing(0.375),
    background: theme.kiamoniDesign.colors.neutralBlack,
    cursor: 'pointer',
  },
}));
