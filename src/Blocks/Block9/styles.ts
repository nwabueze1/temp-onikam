import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';
import { Theme } from '@mui/material';

export const useKiamoniBlock9styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      padding: theme.spacing(8, 0),
      fontFamily: props?.fonts?.body,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 0),
      },
    }),
    block9ActiveElement: {
      border: '1px dashed white',
    },
    container: {
      width: '85%',
      margin: 'auto',
      position: 'relative',
      '&.layout_2,&.layout_4,&.layout_3': {
        [theme.breakpoints.up('lg')]: {
          display: 'grid',
          gridTemplateColumns: '25% 72%',
          gap: '0 3%',
        },
      },
    },
    rightSide: {
      width: '100%',
    },
    leftSide: (props) => ({
      boxSizing: 'border-box',
      height: 'fit-content',
      width: '100%',
      padding: theme.spacing(3, 8),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(3, 5),
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 4),
      },
      position: 'sticky',
      top: '11%',
      '& .side': {
        width: '80%',
        margin: 'auto',
      },
      '&.layout_2': {
        background: props?.colors?.[300],
        padding: theme.spacing(4),
        [theme.breakpoints.up('lg')]: {
          paddingTop: theme.spacing(8),
        },
      },
      '&.layout_3': {
        height: '85vh',
        borderRight: `1px solid ${props?.colors?.[600]}`,
        padding: theme.spacing(4),
        [theme.breakpoints.up('lg')]: {
          paddingTop: theme.spacing(8),
        },
      },
      '&.layout_4': {
        borderRight: `1px solid ${props?.colors?.[400]}`,
        borderBottom: `1px solid ${props?.colors?.[400]}`,
        borderTop: `1px solid ${props?.colors?.[500]}`,
        borderLeft: `1px solid ${props?.colors?.[500]}`,
        padding: theme.spacing(4),
        [theme.breakpoints.up('lg')]: {
          paddingTop: theme.spacing(8),
        },
      },
    }),
    dishContainer: (props) => ({
      paddingTop: theme.spacing(1),
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(1,1fr)',
      gap: theme.spacing(5),

      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      },

      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(3,1fr)',
        paddingTop: theme.spacing(2),
      },

      [theme.breakpoints.up(1200)]: {
        gridTemplateColumns: 'repeat(4,1fr)',
      },

      '& .cardBorder': {
        border: `1px solid ${props?.colors?.[300]}`,
      },
      '&.layout_2,&.layout_4,&.layout_3': {
        [theme.breakpoints.up('lg')]: {
          gridTemplateColumns: 'repeat(3,1fr)',
        },
      },
    }),
    moreFilter: {
      display: 'flex',
      gap: theme.spacing(1),
      justifySelf: 'flex-end',
      cursor: 'pointer',
    },
    containerHeader: {
      display: 'grid',
      gridTemplateColumns: '80% 20%',
      alignItems: 'center',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '100%',
      },
      '&.layout_2,&.layout_4,&.layout_3': {
        gridTemplateColumns: '100%',
      },
    },
    categories: {
      '& .text': {
        fontSize: theme.kiamoniDesign.typography.h6,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
        },
      },
    },
    dishBlockHeader: {
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      alignItems: 'center',
      padding: theme.spacing(7, 0, 4, 0),
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '100%',
        padding: theme.spacing(3, 0),
      },
    },
    filter: {
      display: 'flex',
      gap: theme.spacing(1),
      justifySelf: 'flex-end',
      alignSelf: 'flex-start',
      width: '180px',
      [theme.breakpoints.down('lg')]: {
        alignSelf: 'center',
      },
    },
    dishBlockText: {
      width: '100%',
    },
    dishBlockTextTitle: (props) => ({
      margin: 0,
      fontFamily: props?.fonts?.body,
      fontSize: theme.kiamoniDesign.typography.h1,
      paddingBottom: theme.spacing(1.5),
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h6,
      },
    }),
    dishBlockTextDescription: {
      fontSize: theme.kiamoniDesign.typography.fontSize + 2,
      lineHeight: '30px',
      letterSpacing: '0.2px',
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        lineHeight: '25px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
        lineHeight: '21px',
      },
    },
    mobileFilterBlock: (props) => ({
      width: '100%',
      height: '40px',
      background: props?.colors?.[300],
      marginTop: theme.spacing(3),
      '&.layout_2': {
        background: `linear-gradient(136deg, ${props?.colors?.[500]} 19.79%, ${props?.colors?.[400]} 100%)`,
      },
      '&.layout_3': {
        border: `1px solid ${props?.colors?.[300]}`,
        background: props?.colors?.[200],
      },
      '&.layout_4': {
        background: `linear-gradient(136deg, ${props?.colors?.[500]} 19.79%, ${props?.colors?.[400]} 100%)`,
        padding: theme.spacing(0.1),
        boxSizing: 'border-box',
      },
    }),
    mobileFilterBlockInner: (props) => ({
      display: 'flex',
      justifyContent: 'space-between',
      placeItems: 'center',
      height: '100%',
      background: 'transparent',
      padding: '0 3%',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize,
      },
      '&.layout_4': {
        background: props?.colors?.[200],
        width: '100%',
        height: '38px',
      },
    }),
  })
);
