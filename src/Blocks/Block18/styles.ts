import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useKiamoniBlock18Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
    }),
    container: {
      width: '85%',
      maxWidth: theme.kiamoniStyles.maxWidth,
      display: 'flex',
      margin: 'auto',
      padding: theme.spacing(5, 0),
      boxSizing: 'border-box',
      gap: theme.spacing(7),
      '&.layout_3': {
        [theme.breakpoints.up('lg')]: {
          width: '70%',
        },
      },
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '1fr',
      },
      '&.layout_4': {
        display: 'grid',
        gridTemplateColumns: '35% 65%',
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '&.layout_5': {
        display: 'grid',
        gridTemplateColumns: '65% 35%',
        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: '1fr',
        },
      },
    },
    block18ActiveElement: {
      border: `1px dashed ${theme.kiamoniDesign.colors.neutralWhite}`,
    },
    leftSideBar: {
      width: '35%',
      [theme.breakpoints.down(1500)]: {
        width: '40%',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
      '&.layout_2': {
        order: 2,
      },
      '&.layout_5, &.layout_4': {
        width: '100%',
      },
      '&.layout_3': {
        display: 'none',
      },
    },
    rightSideBar: {
      '&.layout_5': {
        gridRow: '1/2',
        gridColumn: '1/2',
        width: '100%',
      },
      '&.layout_3,': {
        width: '100%',
      },
    },
    header: {
      '&.layout_5, &.layout_4': {
        gridRow: '1/2',
        gridColumn: '1/3',
        width: '100%',
      }
    },
    loadContent: (props) => ({
      marginTop: theme.spacing(5),
      '& img': {
        width: '100%',
      },
      '& iframe': {
        width: '100%',
        height: '500px',
        [theme.breakpoints.down('lg')]: {
          height: '300px',
        },
      },
      '&.layout_5, &.layout_4': {
        marginTop: 0,
      },
      '& p': {
        letterSpacing: '0.2px',
        lineHeight: '24px',
        color: props?.colors?.[600],
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
        [theme.breakpoints.down('sm')]: {
          lineHeight: '21px',
        },
      },
    }),
  })
);
