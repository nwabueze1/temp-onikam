import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock6styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      '& p': {
        fontFamily: 'inherit',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        },
      },
    }),
    block6ActiveElement: {
      border: '1px dashed white',
    },
    container: (props) => ({
      width: '85%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      margin: 'auto',
      padding: '5% 0',
      '&.layout_4,&.layout_2': {
        display: 'block',
      },
      '& .cardDisplay': {
        '&.layout_3, &.layout_4': {
          gridColumn: '1/5',
          gridRow: '2/3',
          gridTemplateColumns: 'repeat(1,1fr)',
          flexWrap: 'wrap',

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
      },
      '& .cardBorder': {
        border: `1px solid ${props?.colors?.[300]}`,
        height: '100%',
        boxSizing: 'border-box',
        width: '100%',
      },
      [theme.breakpoints.down('lg')]: {
        width: '90%',
      },

      [theme.breakpoints.down('sm')]: {
        padding: '8% 0 !important',
      },
    }),
    carouselSwiper: {
      gap: '2%',
    },
    relativeDiv: {
      postition: 'relative',
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      '& img': {
        margin: 'auto',
        width: '20%',
        minWidth: '300px',
        [theme.breakpoints.down('lg')]: {
          minWidth: '200px',
        },
        [theme.breakpoints.down('md')]: {
          minWidth: '150px',
        },
      },
      '&.layout_2': {
        '& h1,& img': {
          margin: 0,
        },
      },
    },
    arrowWrapper: {
      height: '50px',
      width: '30%',
      alignSelf: 'center',
      justifySelf: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
        marginBottom: theme.spacing(3),
        justifyContent: 'center',
      },
      '& h1': {
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h3,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
          margin: 'auto !important',
        },
      },
      '& img': {
        [theme.breakpoints.down('sm')]: {
          margin: 'auto !important',
        },
      },
      '&.layout_3': {
        gridColumn: '1/3',
        '& h1,& img': {
          margin: 0,
        },
        '& img': {
          display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
          gridColumn: '1/5',
          '& h1,& img': {
            margin: 'auto',
          },
        },
        [theme.breakpoints.down('sm')]: {
          '&.layout_3,&.layout_4': {
            gridColumn: '1/5',
            '& h1,& img': {
              margin: 'auto',
            },
          },
        },
      },
      '&.layout_2': {
        '& img': {
          width: '250px',
        },
      },
    },
    dishesWrapper: {
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(3, 0, 6),
      '&.layout_3,&.layout_4': {
        display: 'grid',
        gap: theme.spacing(3.75),
        flexWrap: 'wrap',
        overflow: 'unset',
      },
      '& .cardBorder': {
        '&:hover': {
          background: theme.kiamoniDesign.colors.overlay100,
        },
      },
    },
    dishContainer: {
      width: '100%',
    },
    buttonContainer: {
      width: '150px',
      height: '50px',
      margin: 'auto',
      '&.layout_3': {
        gridColumn: '3/5',
        margin: 'unset',
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
          gridColumn: '1/5',
          gridRow: '3/4',
          margin: 'auto',
        },
      },
      [theme.breakpoints.down('lg')]: {
        minWidth: '120px',
        '& > div > div': {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
      },
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1/5',
        gridRow: '3/4',
        margin: 'auto',
      },
    },
  })
);
