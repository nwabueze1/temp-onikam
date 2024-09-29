import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock7Style = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      '& h1': {
        margin: theme.spacing(0, 0, 1, 0),
        fontSize: theme.kiamoniDesign.typography.h1,
        fontFamily: props?.fonts?.heading,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h2,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
        },
        [theme.breakpoints.down(600)]: {
          textAlign: 'center',
        },
      },
      '& p': {
        lineHeight: '25px',
        lineSpace: '0.2px',
        fontFamily: 'inherit',
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
          lineHeight: '21px',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        },
      },
    }),
    block7ActiveElement: {
      border: '1px dashed white',
    },
    container: (props) => ({
      maxWidth: theme.kiamoniStyles.maxWidth,
      padding: theme.spacing(6, 0, 6),
      width: '85%',
      margin: 'auto',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: theme.spacing(2.875),
      '&.layout_4': {
        gridTemplateColumns: '1fr',
      },
      [theme.breakpoints.down(800)]: {
        width: '90%',
      },
      '& > div': {
        width: '100%',
        height: '100%',
      },
      '& .cardBorder': {
        border: `1px solid ${props?.colors?.[300]}`,
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        '&:hover': {
          background: theme.kiamoniDesign.background.overlay600,
        },
      },
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(3,1fr)',
        '& > div > div > p': {
          paddingTop: 0,
          margin: '0 auto',
        },
      },
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
    }),
    carouselContainer: {
      gridColumn: '1/5',
    },
    itemsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: theme.spacing(3.5),

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },

      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(3,1fr)',
      },

      [theme.breakpoints.up(1200)]: {
        gridTemplateColumns: 'repeat(4,1fr)',
      },
    },
    headerWrapper: {
      marginBottom: theme.spacing(4),

      [theme.breakpoints.between(1023, 1550)]: {
        textAlign: 'center',
        '&.layout_3, &.layout_5': {
          textAlign: 'left',
        },
      },
      '&.layout_2': {
        width: '60%',
        maxWidth: '700px',
        minWidth: '300px',
        gridColumn: '1/-1',
        margin: 'auto',
        marginBottom: theme.spacing(4),
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {
          width: '80%',
        },
        [theme.breakpoints.down(600)]: {
          width: '90%',
          gridColumn: '1/3',
          marginBottom: theme.spacing(2),
        },
      },
      [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
        '&.layout_3,&.layout_4,&.layout_5': {
          gridColumn: '1/3',
          textAlign: 'left',
        },
      },
      [theme.breakpoints.down(600)]: {
        marginBottom: theme.spacing(2),
        gridColumn: '1/3',
        gridRow: '1/2',
        '&.layout_3,&.layout_5': {
          textAlign: 'center',
        },
      },
      '&.layout_4': {
        gridColumn: '1/5',
        display: 'flex',
        gap: theme.spacing(1.875),
        justifyContent: 'space-between',
        textAlign: 'left',
        [theme.breakpoints.down(600)]: {
          textAlign: 'center',
        },
      },
    },
    adContainer: {
      gridColumn: '4/5',
      gridRow: '1/3',
      width: '100%',
      alignSelf: 'flex-start',
      objectFit: 'cover',
      [theme.breakpoints.between(1023, 1550)]: {
        gridRow: '2/3',
      },
      '&.layout_5': {
        gridColumn: '1/-1',
        gridRow: '2/3',
        [theme.breakpoints.down(600)]: {
          gridColumn: '1/3',
        },
      },
      [theme.breakpoints.down('lg')]: {
        gridRow: '2/3',
        gridColumn: '3/4',
      },
      [theme.breakpoints.down(600)]: {
        gridColumn: '2/3',
      },
    },
    buttonContainer: {
      width: '150px !important',
      height: '50px !important',
      margin: 'auto',
      gridColumn: '1/5',
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('lg')]: {
        gridColumn: '1/4',
      },
      '&.layout_3,&.layout_5': {
        gridColumn: '-2/-1',
        gridRow: '1/2',
        margin: `${theme.spacing(5, 0)} !important`,
        marginLeft: 'auto !important',
        [theme.breakpoints.down(600)]: {
          gridColumn: '1/3',
          gridRow: '6/7',
          margin: `${theme.spacing(3, 'auto')} !important`,
        },
      },
      [theme.breakpoints.down(600)]: {
        gridColumn: '1/3',
        gridRow: '6/7',
      },
      '&.layout_5': {
        [theme.breakpoints.down(600)]: {
          gridRow: '7/8 !important',
        },
      },
      '&.layout_4': {
        gridColumn: '1/5',
        gridRow: '3/4',
      },
    },
    arrowContainer: {
      width: 'unset !important',
      gridColumn: '-2/-1',
      gridRow: '1/2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttonArrow: {
      marginLeft: '10px',
      width: '20px',
      height: '15px',
    },
    adContinerVertical: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
    },
  })
);
