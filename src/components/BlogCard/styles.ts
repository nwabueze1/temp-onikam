import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useBlogCardStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    blogTagStyles: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    root: {
      width: '100%',
      height: '100%',
      position: 'relative',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        boxSizing: 'border-box',
        width: '90%',
      },
      transition: 'transform .5s ease',
      '&:hover': {
        '& .animate': {
          transform: 'scale(1.05)',
          transition: 'transform .5s ease',
        },
      },
      '& .animate': {
        transform: 'scale(1)',
        transition: 'transform .5s ease',
      },
    },
    rightContainer: {
      width: '80%',
      height: '100%',
      overflow: 'hidden',
      marginLeft: 'auto',
      '&.horizontal': {
        width: '100%',
      },
    },
    rightContainerImage: {
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: 'backgroundPosition .5s ease',
      backgroundSize: 'cover',
    },
    leftContainer: (props) => ({
      width: '71%',
      background: props?.colors?.[300],
      height: 'fit-content',
      margin: 'auto',
      zIndex: 1,
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translate(-0%, -50%)',
      opacity: '95%',
      padding: '5%',
      display: 'flex',
      flexDirection: 'column',
      '& h6, & > .excerpt': {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
      },
      '& h6': {
        margin: theme.spacing(1.875, 0),
        '-webkit-line-clamp': 1,
      },
      '& > p': {
        marginBottom: theme.spacing(2.5),
        display: '-webkit-box',
        '-webkit-line-clamp': 4,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '& .excerpt': {
        '-webkit-line-clamp': 3,
        flex: 1,
      },
      '&.vertical': {
        minHeight: 220,
        [theme.breakpoints.down('md')]: {
          minHeight: 180,
        },
      },
      '&.horizontal': {
        padding: '5%',
        width: '100%',
        height: 'fit-content',
        bottom: 0,
        transform: 'unset',
        top: 'unset',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
          padding: '3%',
        },
        '& p': {
          margin: '0',
        },
      },
    }),
    separator: {
      flex: 1,
    },
    button: (props) => ({
      width: '45%',
      minWidth: '100px',
      whiteSpace: 'nowrap',
      '&.horizontal': {
        display: 'none',
      },
      '& p': {
        height: '25%',
        padding: theme.spacing(1.25),
      },
      '&:hover': {
        '& svg': {
          color: props?.colors?.[100],
        },
      },
    }),
    buttonArrow: (props) => ({
      color: props?.colors?.[400],
      paddingLeft: theme.spacing(1.25),
    }),
    buttonText: {
      '& svg': {
        width: '25px',
      },
    },
  })
);
