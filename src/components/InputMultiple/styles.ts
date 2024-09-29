import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useInputStyles = makeStyles((theme: Theme) => ({
  inputContainer: {
    width: '100%',
    '& input': {
      background: 'transparent',
      paddingLeft: theme.spacing(1),
      width: '100%',
      outline: 'none',
      border: 'none',
      color: theme.kiamoniDesign.colors.neutralWhite,
      padding: theme.spacing(1.8, 0),
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
      borderBottom: `1px solid ${theme.kiamoniDesign.colors.neutral500}`,
      '&.validate': {
        borderBottom: `1px solid ${theme.kiamoniDesign.colors.error}`,
      },
      '&:focus': {
        borderBottom: `1px solid ${theme.kiamoniDesign.colors.neutralWhite}`,
      },
      '&.white': {
        borderBottom: `1px solid ${theme.kiamoniDesign.colors.neutralWhite}`,
        '&::placeholder': {
          color: theme.kiamoniDesign.colors.neutralWhite,
        },
      },
      '&::placeholder': {
        color: theme.kiamoniDesign.colors.neutral400,
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        },
      },
    },
  },
  errorText: {
    color: theme.kiamoniDesign.colors.error,
    paddingTop: theme.spacing(1),
    display: 'block',
  },
}));
