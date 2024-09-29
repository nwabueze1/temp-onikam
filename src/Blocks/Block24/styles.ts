import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock24Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      color: props?.colors?.[100],
      background: props?.colors?.[200],
      fontFamily: props?.fonts?.body,
    }),
    container: {
      width: '85%',
      margin: 'auto',
      padding: theme.spacing(8, 0),
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        padding: theme.spacing(5, 0),
      },
    },
    header: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h1,
      margin: 0,
      textAlign: 'center',
      marginBottom: theme.spacing(8.5),
      fontFamily: props?.fonts?.heading,
      '& span': {
        paddingRight: theme.spacing(2.5),
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
      },
    }),
    boxHeader: {
      fontSize: theme.kiamoniDesign.typography.h5,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',

      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 4,
      },
    },
    boxHeaderArrow: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(0, 2),
    },
    itemsContainer: {
      display: 'grid',
      width: '100%',
      justifyItems: 'center',
      padding: theme.spacing(8, 0),
    },
    itemsContainerMenu: {
      padding: `${theme.spacing(3, 0, 8, 0)} !important`,
    },
    dishContainer: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(1,1fr)',
      
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
    '@keyframes spinner': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    blogContainer: {
      width: '100%',
      display: 'grid',
      gap: theme.spacing(5),
      margin: 'auto',
      gridTemplateColumns: 'repeat(1,1fr)',
      
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
    loadMoreParent: {
      marginTop: theme.spacing(2.5),
      width: 150,
      height: 50,

      '& .spinner': {
        width: '10px',
        height: '10px',
        border: `2px solid white`,
        borderTop: `2px solid transparent`,
        borderRadius: '50%',
        animation: '$spin 1s linear infinite',
        marginRight: theme.spacing(0.5),
      },
    },
    loadMoreParentBlog: {
      marginTop: theme.spacing(4),
    },
    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  })
);
