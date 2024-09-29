import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useRelatedCard = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      background: props?.colors?.[300],
    }),
    container: (props) => ({
      width: '100%',
      padding: theme.spacing(5, 2.5),
      boxSizing: 'border-box',
      '& a': {
        textDecoration: 'none',
        color: props?.colors?.[100],
      },
    }),
    containerHeader: {
      textAlign: 'center',
      fontSize: theme.kiamoniDesign.typography.h5,
      paddingBottom: theme.spacing(3),
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    cardContent: {
      paddingBottom: theme.spacing(1),
      display: 'flex',
      gap: '4%',
      width: '100%',
      height: '125px',
      placeItems: 'center',
      paddingTop: theme.spacing(2),
      boxSizing: 'border-box',
    },
    title: {
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    description: {
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: theme.kiamoniDesign.typography.fontSize,
      paddingTop: theme.spacing(1.2),
    },
    bottomLine: (props) => ({
      height: '0.5px',
      margin: theme.spacing(1, 0),
      borderBottom: `0.5px solid ${props?.colors?.[400]}`,
    }),
    leftSideContainer: {
      width: '48%',
      height: '100%',
    },
    rightSideContainer: {
      width: '48%',
      height: '100%',
    },
    backgroundImage: {
      width: '100%',
      boxSizing: 'border-box',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    noPost: {
      textAlign: 'center',
    },
  })
);
