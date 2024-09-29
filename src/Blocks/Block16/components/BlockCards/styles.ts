import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useKiamoniBlock16Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
      letterSpacing: '0.2px',
      paddingTop: theme.spacing(8),
      '& h2': {
        lineHeight: '50px',
        margin: theme.spacing(5, 0, 0, 0),

        [theme.breakpoints.down('lg')]: {
          lineHeight: '30px',
        },

        [theme.breakpoints.up('sm')]: {
          margin: 0,
        },
      },
      '& p': {
        lineHeight: '24px',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        padding: 0,
      },
    }),
    topBorderLine: (props) => ({
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
        borderTop: `1px solid ${props?.colors?.[100]}`,
      },
      '&.layout_2': {
        [theme.breakpoints.down('sm')]: {
          borderTop: `1px solid ${props?.colors?.[100]}`,
          paddingBottom: 0,
          paddingTop: 0,
        },
      },
      '&.layout_3': {
        [theme.breakpoints.down('sm')]: {
          borderTop: `1px solid ${props?.colors?.[100]}`,
          paddingBottom: 0,
        },
      },
      '&.layout_5': {
        [theme.breakpoints.down('sm')]: {
          borderTop: 'none',
          paddingBottom: 0,
          paddingTop: theme.spacing(8),
          borderBottom: `1px solid ${props?.colors?.[100]}`,
        },
      },
    }),
    block16ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      margin: 'auto',
      maxWidth: theme.kiamoniStyles.maxWidth,
      alignItems: 'center',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: theme.spacing(0, 5),
      marginBottom: theme.spacing(5),
      paddingTop: theme.spacing(6),

      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(2,1fr)',
        '&.layout_2,&.layout_3,&.layout_5': {
          gap: theme.spacing(5, 0),
        },
      },
      '&.layout_5': {
        gridTemplateColumns: '1fr',
        gap: theme.spacing(5, 0),
        [theme.breakpoints.down('sm')]: {
          gridTemplateRows: 'unset',
        },
      },
      '&.layout_2,&.layout_3': {
        [theme.breakpoints.down('sm')]: {
          gap: theme.spacing(0),
        },
      },

      [theme.breakpoints.up('sm')]: {
        display: 'grid',
        marginBottom: 0,
        paddingTop: theme.spacing(0),
      },
    },
    leftContainer: {
      width: '100%',
      [theme.breakpoints.up(1024)]: {
        height: '500px',
      },
      [theme.breakpoints.down(1024)]: {
        height: '300px',
      },
      position: 'relative',
      '&.layout_2,&.layout_3,&.layout_5': {
        gridColumn: '2/3',
        gridRow: '1/2',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          gridColumn: '1/2',
          gridRow: '2/3',
        },
      },
      '&.layout_5': {
        gridColumn: '1/2',
        gridRow: '2/3',
        height: '500px',
        [theme.breakpoints.down('md')]: {
          height: '300px',
        },
      },
    },
    leftWrapper: (props) => ({
      width: '100%',
      position: 'absolute',
      height: '80%',
      top: '50%',
      left: 0,
      transform: 'translate(0%, -50%)',
      background: `linear-gradient( to bottom, ${props?.colors?.[400]} 0%, ${props?.colors?.[300]} 100%)`,
      '&.layout_3,&.layout_4,&.layout_5': {
        background: 'none',
      },
    }),
    rightWrapper: {
      width: '90%',
      position: 'absolute',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      right: 0,
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      '&.layout_2': {
        right: 'unset',
        left: 0,
      },
      '&.layout_3,&.layout_4,&.layout_5': {
        width: '100%',
      },
    },
    backgroundImage: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    rightContainer: {
      width: '100%',
      boxSizing: 'border-box',
      '&.layout_2': {
        gridColumn: '1/2',
      },
      alignSelf: 'center',
      '&.layout_5': {
        width: '80%',
        margin: 'auto',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
      },
    },
    header: (props) => ({
      fontFamily: props?.fonts?.heading,
      fontSize: theme.kiamoniDesign.typography.h3,
      fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,

      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    }),
    description: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
    image: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  })
);
