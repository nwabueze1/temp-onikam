import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock16Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[200],
      padding: theme.spacing(0, 0, 8, 0),

      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2, 0, 2, 0),
      },
    }),
    block16ActiveElement: {
      border: '1px dashed white',
    },
  })
);
