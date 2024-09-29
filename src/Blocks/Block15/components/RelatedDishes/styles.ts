import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useRelatedDishes = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '85%',
      margin: 'auto',
      maxWidth: theme.kiamoniStyles.maxWidth,
      fontFamily: props?.fonts?.body,
      color: props?.colors?.[100],
    }),
    header: {
      textAlign: 'center',
      fontSize: theme.kiamoniDesign.typography.h3,
      margin: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.kiamoniDesign.typography.h4,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
      },
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
    dishContainer: {
      display: 'grid',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  })
);
