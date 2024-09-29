import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useCarouselStyle = makeStyles((theme: Theme) => ({
  container: {
    display: 'grid',
    gap: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}));
