import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock14Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[200],
      width: '100%',
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
      lineSpacing: '0.2px',
      '& p': {
        lineHeight: '30px',
        [theme.breakpoints.down('lg')]: {
          lineHeight: '24px',
        },
        [theme.breakpoints.down('sm')]: {
          lineHeight: '21px',
        },
      },
      '& h1': {
        lineHeight: '64px',
      },
    }),
    block14ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      padding: theme.spacing(7, 0),
      width: '85%',
      margin: 'auto',
      maxWidth: theme.kiamoniStyles.maxWidth,
      display: 'grid',
      gap: theme.spacing(8),
      [theme.breakpoints.down('lg')]: {
        gap: theme.spacing(4),
      },
      '&.layout_2': {
        [theme.breakpoints.up(1024)]: {
          rowGap: theme.spacing(8),
          gridTemplateColumns: '33% 62%',
          columnGap: '5%',
        },
      },
      '&.layout_4, &.layout_5': {
        [theme.breakpoints.up(1024)]: {
          rowGap: theme.spacing(8),
          gridTemplateColumns: '33% 62%',
          columnGap: '5%',
        },
      },
    },
    header: {
      width: '70%',
      margin: 'auto',
      textAlign: 'center',
      gridColumn: '1/-1',
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
      '&.layout_2': {
        [theme.breakpoints.up(1024)]: {
          gridColumn: '1/2',
          gridRow: '1/-1',
          width: '100%',
        },
      },
      '&.layout_4, &.layout_5': {
        [theme.breakpoints.up(1024)]: {
          gridColumn: '1/2',
          gridRow: '1/-1',
          width: '100%',
        },
      },
      '&.layout_2,&.layout_4,&.layout_5': {
        [theme.breakpoints.up(1024)]: {
          textAlign: 'left',
        },
      },
    },
    headerTitle: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h1,
      fontFamily: props?.fonts?.heading,
      margin: '0 auto',
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h4,
        paddingBottom: theme.spacing(1.5),
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
        paddingBottom: theme.spacing(1),
      },
      '&.layout_2,&.layout_3,&.layout_4,&.layout_5': {
        background: `linear-gradient(107.76deg, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[600]} 103.65%)`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    }),
    headerSubTitle: {
      fontSize: theme.kiamoniDesign.typography.h6,
      paddingBottom: theme.spacing(2.5),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    serviceCard: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: theme.spacing(8),
      [theme.breakpoints.down('lg')]: {
        gap: theme.spacing(5),
      },
      [theme.breakpoints.down(620)]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
      '&.layout_2': {
        [theme.breakpoints.up(1024)]: {
          gap: theme.spacing(8, 5),
        },
        gridTemplateColumns: 'repeat(2,1fr)',
      },
      '&.layout_3': {
        gap: theme.spacing(6),
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: 'repeat(2,1fr)',
        },
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: 'repeat(2,1fr)',
        },
        [theme.breakpoints.down('xl')]: {
          gap: theme.spacing(5),
        },
        gridTemplateColumns: 'repeat(4,1fr)',
      },
      '&.layout_4, &.layout_5': {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
    },
  })
);
