import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock17Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      '& h1': {
        margin: 0,
        fontFamily: props?.fonts?.heading,
        fontSize: theme.kiamoniDesign.typography.h1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h2,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
        },
      },
      '& p': {
        lineHeight: '24px',
        lineSpace: '0.2px',
        fontFamily: 'inherit',
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
          lineHeight: '18px',
        },
        userSelect: 'none',
      },
      '& h6': {
        lineHeight: '30px',
        lineSpace: '0.2px',
        fontFamily: 'inherit',
        fontSize: theme.kiamoniDesign.typography.h5,
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
          lineHeight: '24px',
        },
        [theme.breakpoints.down('md')]: {
          lineHeight: '18px',
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
        userSelect: 'none',
      },
    }),
    block17ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      margin: 'auto',
      padding: '10% 6%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      height: '100%',

      [theme.breakpoints.up('sm')]: {
        padding: '6%',
      },
    },
    blogContainer: {
      width: '100%',
      display: 'grid',
      gap: theme.spacing(5),
      margin: 'auto',
      gridTemplateColumns: 'repeat(3,1fr)',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
      },
      '&.layout_3': {
        gridTemplateColumns: 'repeat(4,1fr)',
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: 'repeat(2,1fr)',
        },
        [theme.breakpoints.down(600)]: {
          gridTemplateColumns: '1fr',
        },
      },
      '&.layout_4': {
        gridTemplateColumns: 'repeat(1,1fr)',

        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: 'repeat(2,1fr)',
        },
      },
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: '1fr',
      },
    },
    buttonContainer: {
      width: '150px',
      height: '50px',
      margin: theme.spacing(4, 'auto', 0, 'auto'),

      '& p': {
        display: 'flex',
        alignItems: 'center',
      },

      '& .spinner': {
        display: 'block',
        width: '10px',
        height: '10px',
        border: `2px solid white`,
        borderTop: `2px solid transparent`,
        borderRadius: '50%',
        animation: '$spinner 1s linear infinite',
        marginRight: theme.spacing(1),
      },

      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4, 'auto', 0, 'auto'),
      },
    },
    blogWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    blogContainerHeader: (props) => ({
      width: '100%',
      textAlign: 'center',
      fontFamily: props?.fonts?.heading,
      fontSize: theme.kiamoniDesign.typography.h1,
      padding: theme.spacing(5, 0),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h3,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
      },
    }),
    categoryContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    dropdownContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignSelf: 'center',
      width: '130px',
      marginLeft: 'auto',
    },
    loader: {
      width: '40px',
      height: '40px',
      borderRadius: '100%',
      borderLeft: (props) => `3px solid ${props?.colors?.[500]}`,
      border: '3px solid transparent',
      animation: '$spinner 1s linear infinite',
    },
    '@keyframes spinner': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    spinnerContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  })
);
