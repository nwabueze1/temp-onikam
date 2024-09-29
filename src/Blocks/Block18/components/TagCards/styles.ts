import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useTagCardStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: {
      width: '100%',
    },
    container: (props) => ({
      width: '100%',
      padding: theme.spacing(5, 2.5),
      boxSizing: 'border-box',
      '& a': {
        textDecoration: 'none',
        color: props?.colors?.[100],
      },
    }),
    containerHeader: {
      textAlign: 'center',
      fontSize: theme.kiamoniDesign.typography.h5,
      paddingBottom: theme.spacing(3),
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    tags: (props) => ({
      display: 'flex',
      flexDirection: 'column',
      borderBottom: `.5px solid ${props?.colors?.[400]}`,
      padding: theme.spacing(1.5, 0),
    }),
    noTag: {
      textAlign: 'center',
    },
  })
);
