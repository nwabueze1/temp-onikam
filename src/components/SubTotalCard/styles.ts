import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../types';

export const usePaymentStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    container: (props) => ({
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      letterSpacing: '0.2px',
      '&.color': {
        background: `linear-gradient(to right, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      },
      padding: '10%',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4.5),
      },
    }),
    header: {
      fontSize: theme.kiamoniDesign.typography.h5,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      paddingBottom: theme.spacing(3.5),
      margin: 0,
    },
    buttonContainer: {
      width: '100%',
      height: '60px',
    },
    subTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: theme.kiamoniDesign.typography.h5,
      paddingBottom: theme.spacing(3.5),
      color: (props) => props?.colors?.[100],
      borderBottomColor: (props) => props?.colors?.[100],
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
      '&.payment': {
        fontSize: `${theme.kiamoniDesign.typography.h4} !important`,
        [theme.breakpoints.down('lg')]: {
          fontSize: `${theme.kiamoniDesign.typography.h5} !important`,
        },
      },
      '& .right': {
        justifySelf: 'flex-end',
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        display: 'flex',
        gap: theme.spacing(0, 0.5),
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        },
      },
      '&.total': {
        fontSize: theme.kiamoniDesign.typography.h3,
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.h6,
        },
      },
      '& > p': {
        fontSize: 'inherit',
      },
    },
    dividedLine: (props) => ({
      width: '100%',
      height: '1px',
      '&.color': {
        background: props?.colors?.[100],
      },
      background: props?.colors?.[500],
      marginBottom: theme.spacing(3.5),
      '&.payment': {
        height: '2px',
      },
    }),
    paymentType: {
      width: '300px',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    paymentImage: {
      width: '80px',
      height: '30px',
      '& img': {
        width: '100%',
      },
    },
    bottomContainer: (props) => ({
      width: '100%',
      padding: '8%',
      boxSizing: 'border-box',
      background: props?.colors?.[300],
      '&.other': {
        background: props?.colors?.[200],
      },
      fontSize: theme.kiamoniDesign.typography.h6,
      lineHeight: '30px',
      [theme.breakpoints.down('lg')]: {
        padding: '5%',
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
        lineHeight: '25px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        lineHeight: '21px',
      },
    }),
    firstText: {
      lineSpacing: '0.2px',
      lineHeight: '30px',
      fontSize: theme.kiamoniDesign.typography.h6,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
    },
    secondText: {
      paddingTop: theme.spacing(2.5),
      lineSpacing: '0.2px',
      lineHeight: '30px',
      fontSize: theme.kiamoniDesign.typography.h6,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      },
    },
    buttonContainerText: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    cardContainer: {
      padding: theme.spacing(2, 0, 5),
    },
    cardOptions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 25%)',
      justifyContent: 'space-evenly',
      height: '90px',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.down('lg')]: {
        height: '50px',
      },
    },
    cardOptionsImage: {
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      backgroundSize: 'contain',
      margin: 'auto',
    },
    cardContainerText: {
      fontSize: theme.kiamoniDesign.typography.h4,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      paddingBottom: theme.spacing(4),
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    },
    cardContainerSubText: {
      padding: theme.spacing(1.4),
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
    },
    cardOtherDetails: {
      display: 'grid',
      gridTemplateColumns: '65% 30%',
      justifyContent: 'space-between',
    },
    formContainer: {
      display: 'grid',
      gap: theme.spacing(2.5),
    },
    paymentOption: (props) => ({
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${props?.colors?.[100]}`,
      borderRadius: '4px',
      padding: theme.spacing(0.8, 0.5),
      gap: theme.spacing(2),
      alignItems: 'center',
      background: 'transparent',
      '& input ~.custom__radio': {
        outlineColor: props?.colors?.[100],
      },
      '& input:checked ~ .custom__radio': {
        outlineColor: props?.colors?.[100],
        backgroundColor: props?.colors?.[100],
      },
      '& p': {
        color: props?.colors?.[100],
      },
    }),
    paymentOptionError: {
      color: theme.kiamoniDesign.colors.error,
      textAlign: 'center',
      background: theme.kiamoniDesign.background.overlay700,
    },
    button: (props) => ({
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      color: props?.colors?.[200],
      textDecoration: 'none',
      fontFamily: props?.fonts?.body,
      fontSize: theme.kiamoniDesign.typography.fontSize,
      outline: 'none',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
      },
      cursor: 'pointer',
      '&.primary, &:hover, &:focus, &:active, &.loading': {
        padding: theme.spacing(3, 0),
        height: 60,
        background: props?.colors?.[100],
        '&:hover': {
          background: props?.colors?.[300],
          transition: 'background 0.5 ease',
        },
      },
    }),
    subHeading: (props) => ({
      color: props?.colors?.[100],
    }),
  })
);
