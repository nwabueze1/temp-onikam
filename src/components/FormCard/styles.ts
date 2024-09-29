import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useAccordionStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: {
      width: '100%',
    },
    container: {
      paddingBottom: theme.spacing(3),
      '&.pickup': {
        display: 'none',
      },
      '&.delivery': {
        display: 'none',
      },
    },
    accordion: (props) => ({
      display: 'flex',
      justifyContent: 'space-between',
      border: `1px solid ${props?.colors?.[100]}`,
      padding: theme.spacing(2),
      gap: theme.spacing(2),
      alignItems: 'center',
    }),
    accordionTextHeader: {
      fontSize: theme.kiamoniDesign.typography.h6,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    accordionTextSubheader: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
    },
    submitBtn: {
      display: 'none',
    },
  })
);
