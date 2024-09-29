import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';
import { Theme } from '@mui/material';

export const useCardComponentStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      '&.regular': {
        border: `1px solid ${props?.colors?.[600]}`,
      },
      width: '100%',
      height: '100%',
    }),
    dishCardImg: {
      display: 'inline-block',
      width: '100%',
      height: 'auto',
      borderRadius: '100%',
    },
    name: {
      fontSize: theme.kiamoniDesign.typography.h6,
      '&.regular': {
        textAlign: 'left',
        fontSize: theme.kiamoniDesign.typography.h3,
      },
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
    role: {
      '&.regular': {
        textAlign: 'left',
        fontSize: theme.kiamoniDesign.typography.h6,
      },
      paddingLeft: theme.spacing(2),
      fontSize: theme.kiamoniDesign.typography.fontSize,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 4,
      },
      paddingBottom: theme.spacing(2),
    },
    cardImage: {
      width: '100%',
      height: 'auto',
      display: 'inline-block',
    },
  })
);
