import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useDisplayBlogCardStyles = makeStyles((theme: Theme) => ({
  displayBlogCard: {
    width: '100%',
    height: '450px',
    [theme.breakpoints.down('sm')]: {
      height: '380px',
    },
    '&.layout_2, &.layout_3, &.layout_4': {
      height: '500px',
      [theme.breakpoints.down('lg')]: {
        height: '450px',
      },
    },
  },
}));
