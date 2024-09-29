import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useBlogStyles = makeStyles((theme: Theme) => ({
  blogCardContainer: {
    width: '100%',
    height: '500px',
    marginBottom: '50px',
    [theme.breakpoints.down('lg')]: {
      height: '390px',
    },
    [theme.breakpoints.down(800)]: {
      height: '340px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '350px',
      padding: theme.spacing(1.3),
      boxSizing: 'border-box',
    },
    '&.layout_3': {
      [theme.breakpoints.between(450, 1300)]: {
        height: '480px',
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 'unset',
      },
    },
    '&.layout_2,&.layout_3,&.layout_4,&.layout_5': {
      [theme.breakpoints.down('sm')]: {
        height: '450px',
      },
    },
    '&.layout_2': {
      [theme.breakpoints.down('lg')]: {
        height: '400px',
      },
    },
  },
}));
