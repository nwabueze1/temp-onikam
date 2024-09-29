import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useFormcardStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: {
      width: '100%',
      '& .input': {
        paddingBottom: theme.spacing(4.2),
      },
    },
    title: {
      margin: 0,
      fontSize: theme.kiamoniDesign.typography.h2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h4,
      },
    },
    subtitle: {
      fontWeight: theme.kiamoniDesign.typography.fontWeightRegular,
      fontSize: theme.kiamoniDesign.typography.h5,
      margin: 0,
      padding: theme.spacing(3.5, 0, 4),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    },
    emailContainer: (props) => ({
      display: 'flex',
      gap: theme.spacing(1.2, 0),
      paddingTop: theme.spacing(4.2),
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      '& input': {
        accentColor: props?.colors?.[500],
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    }),
    checkboxText: (props) => ({
      color: props?.colors?.[1000],
    }),
    shipping: {
      padding: theme.spacing(4.2, 0),
      fontSize: theme.kiamoniDesign.typography.h5,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    },
    inputContainer: {
      paddingBottom: theme.spacing(4.2),
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: theme.spacing(2),
    },
    textAreaContainer: (props) => ({
      width: '100%',
      height: '133px',
      padding: theme.spacing(2),
      outlineColor: 'none',
      fontFamily: props?.fonts?.body,
      background: 'transparent',
      border: `1px solid ${theme.kiamoniDesign.colors.neutral500}`,
      color: props?.colors?.[100],
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
      '&::placeholder': {
        color: props?.colors?.[900],
      },
    }),
    description: {
      paddingBottom: theme.spacing(2),
    },
  })
);
