import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useContainerStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    containerTitle: (props) => ({
      fontFamily: props?.fonts?.heading,
      '&.layout_3,&.layout_4,&.layout_5': {
        textAlign: 'center',
        fontSize: theme.kiamoniDesign.typography.h2,
        gridColumn: 'unset',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
        },
        [theme.breakpoints.down('sm')]: {
          textAlign: 'left',
          fontSize: theme.kiamoniDesign.typography.h5,
        },
      },
      gridColumn: '2/3',
      fontSize: theme.kiamoniDesign.typography.h4,
      '&.layout_2': {
        gridColumn: '1/2',
        gridRow: '1/2',
        [theme.breakpoints.down('lg')]: {
          fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
          fontSize: theme.kiamoniDesign.typography.h5,
          paddingTop: 0,
        },
      },
      '&.layout_5': {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        gridColumn: '1/2',
        gridRow: '3/4',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
        fontSize: theme.kiamoniDesign.typography.h5,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
    }),
    containerSubTitle: {
      fontSize: theme.kiamoniDesign.typography.h6,
      gridColumn: '1/2',
      gridRow: '1/2',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        paddingTop: theme.spacing(1),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        lineHeight: '20px',
      },
      '&.layout_2': {
        gridColumn: '2/3',
        [theme.breakpoints.down('lg')]: {
          gridRow: 'unset',
          gridColumn: 'unset',
          textAlign: 'left',
          paddingTop: theme.spacing(5),
        },
        [theme.breakpoints.down('sm')]: {
          paddingTop: theme.spacing(8),
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        },
      },
      '&.layout_3,&.layout_4,&.layout_5': {
        textAlign: 'center',
        marginTop: theme.spacing(10),
        width: '65%',
        margin: 'auto',
        gridRow: 'unset',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          marginTop: theme.spacing(1),
        },
        '&.layout_3,&.layout_4': {
          [theme.breakpoints.down('lg')]: {
            textAlign: 'left',
          },
        },
        '&.layout_4': {
          marginTop: theme.spacing(7),
        },
      },
      '&.layout_5': {
        [theme.breakpoints.down('sm')]: {
          textAlign: 'left',
        },
      },
      lineHeight: '30px',
    },
    title: (props) => ({
      margin: 0,
      paddingBottom: theme.spacing(1),
      fontFamily: props?.fonts?.body,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
        lineHeight: '25px',
      },
      [theme.breakpoints.down('md')]: {
        paddingBottom: theme.spacing(3),
        '&.layout_2': {
          paddingBottom: theme.spacing(1),
        },
      },
    }),
  })
);
