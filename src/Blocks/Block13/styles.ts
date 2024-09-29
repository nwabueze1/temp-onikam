import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock13Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[300],
      color: props?.colors?.[100],
      width: '100%',
      fontFamily: props?.fonts?.body,
      position: 'relative',
      display: 'grid',
      '&.layout_3,&.layout_4,&.layout_5,&.layout_6': {
        background: theme.kiamoniDesign.background.overlay800,
      },
      '&.layout_3': {
        height: '380px',
      },
      '&.layout_4': {
        height: '240px',
      },
      '&.layout_6,&.layout_5': {
        height: '320px',
      },
    }),
    block13ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      margin: 'auto',
      padding: theme.spacing(8, 0),
      gridColumn: '1/2',
      gridRow: '1/2',
    },
    links: (props) => ({
      textDecoration: 'none',
      color: props?.colors?.[100],
      paddingTop: theme.spacing(2),
    }),
    header: (props) => ({
      margin: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      fontSize: theme.kiamoniDesign.typography.h1,
      fontFamily: props?.fonts?.heading,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h2,
      },
    }),
    subHeader: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      fontSize: theme.kiamoniDesign.typography.h6,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    separatingIcon: {
      padding: theme.spacing(0, 1),
      fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
    },
    search: (props) => ({
      width: '70%',
      margin: 'auto',
      borderBottom: `1px solid ${props?.colors?.[100]}`,
      paddingTop: theme.spacing(8),
      display: 'flex',
      gap: theme.spacing(1),
      padding: theme.spacing(1),
      '& input': {
        fontSize: `${theme.kiamoniDesign.typography.h6} !important`,
      },
      '& ::placeholder': {
        fontSize: `${theme.kiamoniDesign.typography.h6} !important`,
      },
    }),
    backgroundImage: {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      gridColumn: '1/2',
      gridRow: '1/2',
      zIndex: -1,
      position: 'absolute',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '0, 30px',
      },
    },
    subTitle: {
      margin: 'auto',
      width: '60%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
      fontSize: theme.kiamoniDesign.typography.h5,
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
        width: '80%',
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        paddingTop: theme.spacing(2),
      },
    },
  })
);
