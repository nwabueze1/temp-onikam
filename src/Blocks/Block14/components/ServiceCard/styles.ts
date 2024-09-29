import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useServiceCardStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      textAlign: 'center',
      '&.layout_3,&.layout_4,&.layout_5': {
        border: `1px solid ${props?.colors?.[300]}`,
        padding: theme.spacing(5),
        [theme.breakpoints.down('xl')]: {
          padding: theme.spacing(2),
        },
      },
      '&.layout_5': {
        padding: `${theme.spacing(5, 0, 0)} !important`,
        [theme.breakpoints.down('xl')]: {
          padding: `${theme.spacing(2, 0, 0)} !important`,
        },
      },
    }),
    header: {
      margin: 0,
      paddingBottom: theme.spacing(3),
      fontSize: theme.kiamoniDesign.typography.h5,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        paddingBottom: theme.spacing(1.3),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        paddingBottom: theme.spacing(1.3),
      },
    },
    descriptionText: {
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
    descriptionImage: {
      width: '100%',
      height: '200px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      [theme.breakpoints.down('md')]: {
        height: '130px',
      },
    },
  })
);
