import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock20Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      color: props?.colors?.[100],
      background: props?.colors?.[200],
      padding: theme.spacing(8, 0),
      fontFamily: props?.fonts?.body,
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        '&.layout_5': {
          textAlign: 'left',
        },
      },
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(4, 0),
      },
      [theme.breakpoints.down('sm')]: {
        '&.layout_5': {
          paddingBottom: theme.spacing(8),
        },
      },
    }),
    block20ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      margin: 'auto',
      display: 'grid',
      [theme.breakpoints.down('lg')]: {
        width: '90%',
      },
      [theme.breakpoints.up('md')]: {
        '&.layout_5': {
          gridTemplateColumns: '35% 60%',
          gap: '5%',
          alignItems: 'center',
          justifyItems: 'center',
        },
      },
    },
    headerText: (props) => ({
      marginTop: 0,
      fontFamily: props?.fonts?.heading,
      fontSize: theme.kiamoniDesign.typography.h1,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h4,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
        marginBottom: theme.spacing(1),
      },
    }),
    headerSubText: {
      fontSize: theme.kiamoniDesign.typography.h5,
      lineHeight: '36px',
      paddingBottom: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        width: '100%',
        margin: 'auto',
      },
      '&.layout_5': {
        [theme.breakpoints.up('lg')]: {
          width: '75%',
          margin: 0,
        },
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        lineHeight: '24px',
        paddingBottom: theme.spacing(4),
      },
      [theme.breakpoints.down('md')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        lineHeight: '21px',
        paddingBottom: theme.spacing(3),
      },
    },
    imageBackgroundColor: (props) => ({
      width: '100%',
      height: '70%',
      gridRow: '1/2',
      gridColumn: '1/2',
      position: 'absolute',
      background: `linear-gradient(to bottom, ${props?.colors?.[400]} 20.81%, ${props?.colors?.[500]} 103.65%)`,
      '&.layout_5': {
        [theme.breakpoints.down('sm')]: {
          width: '80%',
          height: '110%',
          alignSelf: 'flex-start',
        },
      },
    }),
    groupImage5: {
      display: 'block',
      width: 'auto',
      height: 'auto',
      zIndex: 2,
      objectFit: 'contain',
      '&.layout_1': {
        margin: 'auto',
        maxHeight: 200,
        maxWidth: '85vw',
        [theme.breakpoints.up('md')]: {
          maxHeight: 250,
        },
        [theme.breakpoints.up('lg')]: {
          maxHeight: 500,
        },
        [theme.breakpoints.up(1720)]: {
          maxHeight: 700,
        },
      },
      '&.layout_5': {
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '90%',
        },
      },
    },
    groupImageContainer: {
      width: '100%',
      height: '700px',
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'flex-start',
      paddingTop: theme.spacing(5),
      position: 'relative',
      '&.layout_5,&.layout_1': {
        justifyItems: 'center',
      },
      '&.layout_5': {
        [theme.breakpoints.up(1720)]: {
          height: '700px',
        },
        height: '100%',
        paddingTop: 0,
        [theme.breakpoints.down('lg')]: {
          height: '250px',
        },
        [theme.breakpoints.down('sm')]: {
          paddingTop: theme.spacing(3),
          height: '200px',
          justifyItems: 'center',
          alignItems: 'center',
        },
      },
      [theme.breakpoints.down('lg')]: {
        height: '400px',
      },
      [theme.breakpoints.down('md')]: {
        height: '300px',
      },
      [theme.breakpoints.down(550)]: {
        height: '250px',
        paddingTop: theme.spacing(2.5),
      },
      [theme.breakpoints.down('sm')]: {
        height: '200px',
      },
      '&.layout_1': {
        height: 'auto',
        paddingTop: 0,
      },
    },
    groupImage: {
      width: '100%',
      height: '100%',
      gridRow: '1/2',
      gridColumn: '1/2',
      backgroundPosition: 'top,center',
      '&.layout_5,&.layout_1': {
        width: '90%',
        backgroundSize: 'cover',
      },
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      '&.layout_5': {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: '100%',
          alignSelf: 'flex-start',
        },
      },
    },
    cardContainer: (props) => ({
      display: 'grid',
      width: '100%',
      '&.layout_4': {
        [theme.breakpoints.up('lg')]: {
          width: '80%',
          margin: 'auto',
        },
      },
      background: props?.colors?.[200],
      '&.layout_3': {
        [theme.breakpoints.up('md')]: {
          margin: 'auto',
          width: '90%',
        },
      },
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: theme.spacing(0, 2),
      [theme.breakpoints.down('md')]: {
        gap: theme.spacing(0, 1),
      },
      '&.layout_2': {
        paddingTop: theme.spacing(2.5),
      },
      gridColumn: '1/2',
      gridRow: '1/2',
    }),
    cardCarousel: {
      width: '100%',
      height: '100%',
      margin: 'auto',
      [theme.breakpoints.up('md')]: {
        '&.layout_4': {
          width: '200px',
        },
      },
    },
    cardBackground: (props) => ({
      width: '100%',
      height: '75%',
      background: `linear-gradient(to bottom, ${props?.colors?.[400]} 20.81%, ${props?.colors?.[500]} 103.65%)`,
      gridColumn: '1/2',
      gridRow: '1/2',
      '&.layout_4': {
        display: 'none',
      },
    }),
    cardComponentContainer: {
      display: 'grid',
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
  })
);
