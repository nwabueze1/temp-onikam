import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock21Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
      '& h5': {
        fontWeight: theme.kiamoniDesign.typography.fontWeightSmall,
        fontSize: theme.kiamoniDesign.typography.fontSize + 6,
        fontFamily: props?.fonts?.heading,
        color: props?.colors?.[400],
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        },
      },
      '& a': {
        color: props?.colors?.[100],
        textDecoration: 'none',
      },
    }),
    block21ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      margin: 'auto',
      padding: theme.spacing(8, 0),
      display: 'grid',
      gridTemplateColumns: '55% 40%',
      gap: '0 5%',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '1fr',
      },
      '&.layout_2': {
        gridTemplateColumns: '35% 60%',
        [theme.breakpoints.down(1200)]: {
          gridTemplateColumns: '1fr',
        },
        [theme.breakpoints.up('lg')]: {
          gap: '0 8%',
        },
      },
      '&.layout_3,&.layout_4,&.layout_5': {
        gridTemplateColumns: '1fr',
      },
      '&.layout_5': {
        paddingTop: 0,
      },
    },
    formContainer: {
      width: '100%',
      margin: 'auto',
      display: 'grid',
      gap: theme.spacing(2),
      '& input, & placeholder': {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      '&.layout_3,&.layout_4,&.layout_5': {
        width: '70%',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
        },
      },
      '&.layout_2': {
        gridColumn: '2/3',
        [theme.breakpoints.down('lg')]: {
          gridColumn: '1/2',
          gridRow: '4/5',
        },
      },
      [theme.breakpoints.down('lg')]: {
        gridColumn: 'unset',
      },
    },
    inputContainer: {
      paddingBottom: theme.spacing(4),
      display: 'grid',
      gap: theme.spacing(1),
      marginTop: 20,
    },
    buttonContainer: (props) => ({
      display: 'flex',
      height: '62px',
      width: '170px',
      '& button': {
        padding: theme.spacing(0, 6),
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        borderWidth: 0,
        cursor: 'pointer',
        background: `linear-gradient(136deg, ${props?.colors?.[500]} 19.69%, ${props?.colors?.[600]} 100%)`,
        color: props?.colors?.[100],
        '&:hover': {
          background: props?.colors?.[300],
        },
      },
      marginTop: theme.spacing(1),
    }),
    incomingMessage: (props) => ({
      background: 'transparent',
      outline: 'transparent',
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
      padding: theme.spacing(2.5, 2.7),
      width: '100%',
      boxSizing: 'border-box',
      height: '200px',
      marginBottom: theme.spacing(4),
    }),
    socialIcons: {
      display: 'flex',
      width: '100%',
      gap: theme.spacing(4),
      '& svg': {
        paddingRight: theme.spacing(1),
        width: '30px',
        height: '30px',
      },
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
    },
    header: {
      margin: 0,
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
    },
    subHeader: {
      gap: theme.spacing(1),
      display: 'flex',
      width: '100%',
    },
    dates: {
      padding: theme.spacing(1.5, 0),
    },
    subContainer: {
      display: 'grid',
      '&.layout_3,&.layout_4': {
        gridTemplateColumns: '20% 27% 45%',
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: 'repeat(3, 30%)',
          paddingTop: theme.spacing(1),
        },
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        gap: '3%',
      },
      [theme.breakpoints.down('sm')]: {
        '& p': {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
        paddingBottom: theme.spacing(4),
      },
      gap: '3%',
      '&.layout_2': {
        gridColumn: '1/2',
        gridRow: '2/3',
      },
      '&.layout_5': {
        display: 'none',
      },
      '&.layout_4': {
        gridRow: '2/3',
      },
      [theme.breakpoints.down('lg')]: {
        gridColumn: '1/2',
        gridRow: '4/5',
      },
    },
    iconText: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '&.layout_3,&.layout_4': {
        [theme.breakpoints.down('lg')]: {
          display: 'none',
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
      },
    },
  })
);
