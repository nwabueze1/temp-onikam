import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useCategoriesStyles = makeStyles<Theme, CustomThemeProps>(
    (theme: Theme) => ({
      blogWrapper: {
        width: '100%',
        display: 'flex',
        cursor: 'pointer',
        flexWrap: 'wrap',
        gap: theme.spacing(2, 3),
      },
      category: (props) => ({
        fontSize: theme.kiamoniDesign.typography.h5,
        whiteSpace: 'nowrap',
        '&.activeColor': {
          color: props?.colors?.[500],
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
      }),
      quantity: {
        paddingLeft: theme.spacing(1),
      },
    })
  );