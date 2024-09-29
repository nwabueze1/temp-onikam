import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../../types';

export const useKiamoniBlockStyles4 = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      width: '100%',
      background: props?.colors?.[200],
      padding: theme.spacing(5, 0),
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
        '& p': {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
          lineHeight: '30px',
          [theme.breakpoints.down('lg')]: {
            lineHeight: '21px',
            fontSize: theme.kiamoniDesign.typography.fontSize,
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: `${theme.kiamoniDesign.typography.fontSize} !important`,
            lineHeight: '21px',
          },
        },
      },
      '& p': {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        lineHeight: '30px',
        [theme.breakpoints.down('sm')]: {
          fontSize: `${theme.kiamoniDesign.typography.fontSize}px!important`,
          lineHeight: '21px',
        },
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(10, 0),
      },
    }),
    cardsContainer: {
      display: 'grid',
      gap: theme.spacing(4),
      '&.layout_2': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        '&.layout_2': {
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: theme.spacing(2),
        },
        '&.layout_3, &.layout-5': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: theme.spacing(3),
        },
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(5),
        placeItems: 'center',
        '&.layout_2': {
          placeItems: 'unset',
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '&.layout_3, &.layout-5': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: theme.spacing(3),
        },
        '&.layout_5': {
          gridArea: '1/1',
        },
      },
    },
    block4ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      margin: 'auto',
      [theme.breakpoints.down('lg')]: {
        width: '90%',
      },
    },
    contentContainer: {
      width: '100%',
      gap: theme.spacing(5),
      alignItems: 'center',
      padding: theme.spacing(8, 0),
      [theme.breakpoints.down('lg')]: {
        gap: theme.spacing(3.75),
      },
      '&.layout_3': {
        [theme.breakpoints.down('md')]: {
          gap: theme.spacing(2),
        },
      },
    },
    paragraph: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      lineHeight: '30px',
    },
    heading: {
      margin: 'auto',
      '& p': {
        paddingTop: theme.spacing(2.5),
        [theme.breakpoints.down('md')]: { lineHeight: '21px' },
      },
    },
    layoutABase: {
      display: 'flex',
      gap: theme.spacing(3),
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        '&.layout_1': {
          width: '70%',
          margin: '0 auto',
        },
        '&.layout_2': {
          flexDirection: 'column',
        },
        '&.layout_5': {
          flexDirection: 'row-reverse',
          alignItems: 'center',
        },
        [theme.breakpoints.up('lg')]: {
          '&.layout_1, &.layout_3, &.layout_5': {
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            gap: theme.spacing(5),
          },
          '&.layout_5': {
            gridTemplateColumns: '70% 30%',
          },
        },
      },
      [theme.breakpoints.up('lg')]: {
        '&.layout_1': { width: 'auto' },
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
      },
    },
    layoutBBase: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(3),
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    header: {
      '& h1, & p': {
        margin: 0,
        marginBottom: 0,
        textAlign: 'center',
        justifyContent: 'space-between',
      },
      display: 'grid',
      gap: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        '&.layout_2': {
          '& h1, & p': {
            textAlign: 'center',
          },
          width: '70%',
          margin: '0 auto',
        },
        '&.layout_4, &.layout_5': {
          '& h1, & p': {
            textAlign: 'start',
          },
        },
        '&.layout_4': {
          width: '30%',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '& h1, & p': {
          textAlign: 'start',
        },
        '&.layout_2': {
          width: '55%',
          margin: '0 auto',
        },
      },
    },
    contentWrapper: (props) => ({
      background: props?.colors?.[300],
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(6.25, 5),
      boxSizing: 'border-box',
      boxShadow: '0 4px 12px  rgba(20, 20, 21, 0.4)',
      gap: theme.spacing(2.5),
      height: '100%',
      [theme.breakpoints.down('lg')]: { padding: theme.spacing(2.5) },
      [theme.breakpoints.down('md')]: { padding: theme.spacing(1.15) },
      '& p': {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        lineHeight: '30px',
        fontWeight: theme.kiamoniDesign.typography.fontWeightRegular,
        color: props?.colors?.[400],
        [theme.breakpoints.down('lg')]: {
          lineHeight: '21px',
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
      },
      '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        '& h4': {
          alignSelf: 'flex-end',
          fontSize: theme.kiamoniDesign.typography.fontSize + 6,
          fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
          [theme.breakpoints.down('lg')]: {
            fontSize: theme.kiamoniDesign.typography.fontSize + 2,
          },
        },
        '& img': {
          minWidth: '75px',
          width: '20%',
          maxHeight: 88,
          [theme.breakpoints.down('lg')]: {
            minWidth: '55px',
          },
          [theme.breakpoints.down('sm')]: {
            width: '48px',
          },
        },
      },
      '&.layout_2,&.layout_3,&.layout_4,&.layout_5,': {
        [theme.breakpoints.down('lg')]: {
          padding: theme.spacing(3.75),
        },
      },
      '&.layout_3,': {
        [theme.breakpoints.down('md')]: {
          padding: `${theme.spacing(2)} !important`,
        },
      },
      '&.layout_1,': {
        [theme.breakpoints.down('md')]: {
          padding: `${theme.spacing(4.5)} !important`,
        },
      },
      [theme.breakpoints.up('md')]: {
        '&.layout_4': {
          width: '30%',
        },
      },
    }),
  })
);
