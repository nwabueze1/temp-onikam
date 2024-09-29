import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useRadioButtonStyles = makeStyles<Theme, CustomThemeProps>(() => ({
  container: props => ({
    '& input': {
      cursor: 'pointer',
      width: '16px',
      height: '16px',
      accentColor: props?.colors?.[500]
    },
  }),
}));
