import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useDropdownListClasses = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    dropDownList: (props) => ({
      padding: theme.spacing(1.3),
      cursor: 'pointer',
      listStyleType: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: props?.colors?.[500],
      },
    }),
  })
);
