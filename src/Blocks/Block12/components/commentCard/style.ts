import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useCommentCardStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    margin: 'auto',
    width: '100%',
    paddingTop: theme.spacing(5),
    '&.double': {
      width: '92%',
      padding: '8%',
    },
    '&.center::before': {
      left: '50%',
      transform: 'translateX(-50%)',
    },
    boxSizing: 'border-box',
    zIndex: 1,
  },
  containerName: {
    paddingBottom: `${theme.spacing(2)}!important`,
    zIndex: 2,
    background: 'transparent',
    position: 'relative',
  },
  subheading: {
    position: 'relative',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    height: 111,
    width: 134,
    top: 5,
    left: 0,
  },
}));
