import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock10Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      width: '100%',
      background: props?.colors?.[200],
      fontFamily: props?.fonts?.body,
      padding: theme.spacing(7.5, 0),
      '& h1, h4, p': {
        margin: 0,
        padding: 0,
        lineSpace: '0.2px',
        fontFamily: props?.fonts?.body,
      },
      '& h1': {
        fontSize: theme.kiamoniDesign.typography.h1,
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        lineHeight: '48px',
        fontFamily: props?.fonts?.heading,
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h4,
          lineHeight: '40px',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
          lineHeight: '30px',
        },
      },
      '& p': {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        lineHeight: '30px',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
          lineHeight: '21px',
        },
      },
      '&.layout_2': {
        '& p': {
          color: props?.colors?.[100],
        },
      },
      '& h4': {
        fontSize: theme.kiamoniDesign.typography.h4,
        fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
        lineHeight: '30px',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
          lineHeight: '21px',
        },
      },
    }),
    block10ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      margin: 'auto',
    },
    headerContainer: {
      textAlign: 'center',
      '& img': {
        [theme.breakpoints.down('lg')]: {
          width: '40%',
          minWidth: '200px',
        },
        [theme.breakpoints.down('sm')]: {
          width: '40%',
          minWidth: '150px',
        },
      },
    },
    exploreCardContainer: {
      marginTop: theme.spacing(6.25),
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      [theme.breakpoints.down(700)]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
      '&.layout_5': {
        gridTemplateColumns: 'repeat(4,1fr)',
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: 'repeat(2,1fr)',
        },
      },
    },
  })
);
