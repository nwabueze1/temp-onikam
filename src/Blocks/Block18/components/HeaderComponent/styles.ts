import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../../../types';

export const useHeaderComponentStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: {
      width: '100%',
      '& span': {
        display: 'inline-flex',
        alignItems: 'center',
      },
    },
    container: {
      '&.layout_5, &.layout_4': {
        gridTemplateColumns: '1fr',
        display: 'grid',
      },
    },
    header: {
      '&.layout_5, &.layout_4': {
        gridColumn: '1/2',
        gridRow: '1/2',
        zIndex: 3,
        padding: '0 8%',
        margin: 'auto',
      },
    },
    headerTitle: (props) => ({
      fontSize: theme.kiamoniDesign.typography.h1,
      fontFamily: props?.fonts?.heading,
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.kiamoniDesign.typography.h2,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.h5,
      },
      '&.layout_4, &.layout_5': {
        [theme.breakpoints.up('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize * 4.5,
        },
      },
    }),
    headerDetails: (props) => ({
      color: props?.colors?.[400],
      padding: theme.spacing(3, 0),
      fontSize: theme.kiamoniDesign.typography.fontSize,
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.kiamoniDesign.typography.fontSize - 2,
        display: 'grid',
        gridTemplateColumns: 'min-content min-content',
        alignItems: 'end',
        gridRowGap: theme.spacing(2),
      },
      '&.layout_5, &.layout_4': {
        color: props?.colors?.[500],
      },
    }),
    headerdetailsAuthor: {
      paddingRight: theme.spacing(2),
    },
    headerDetailsDate: (props) => ({
      borderLeft: `1px solid ${props?.colors?.[400]}`,
      padding: theme.spacing(0, 2),
      [theme.breakpoints.down(550)]: {
        borderLeft: 'unset',
        padding: theme.spacing(0, 0),
      },
    }),
    headerDetailsRead: (props) => ({
      borderLeft: `1px solid ${props?.colors?.[400]}`,
      padding: theme.spacing(0, 2),
    }),
    headerDetailsComment: (props) => ({
      borderLeft: `1px solid ${props?.colors?.[400]}`,
      padding: theme.spacing(0, 2),
    }),
    headerImageContainer: {
      width: '100%',
      '&.layout_5, &.layout_4': {
        gridColumn: '1/2',
        gridRow: '1/2',
      },
    },
    headerImage: {
      width: '100%',
      aspectRatio: '3 / 1.5',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&.layout_5, &.layout_4': {
        width: '100%',
        aspectRatio: '3 / 1',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          aspectRatio: '3 / 2',
        },
      },
    },
    featuredImageAttribution: (props) => ({
      margin: theme.spacing(2, 0, 0, 0),
      fontSize: theme.typography.fontSize + 1,
      fontFamily: props?.fonts?.body,

      color: (props) => props?.colors?.[100],

      '& a': {
        color: (props) => props?.colors?.[100],
      },
    }),
    overlay: {
      '&.layout_5, &.layout_4': {
        gridColumn: '1/2',
        gridRow: '1/2',
        zIndex: 2,
        background: theme.kiamoniDesign.background.overlay700,
        width: '100%',
        aspectRatio: '3 / 1',
        [theme.breakpoints.down('lg')]: {
          width: '100%',
          aspectRatio: '3 / 2',
        },
      },
    },
    authorImageContainer: {
      width: '24px',
      height: '24px',
      marginRight: '5px',
      marginLeft: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    authorImage: {
      width: '24px',
      height: '24px',
      borderRadius: '100%',
      objectFit: 'cover',
    },
  })
);
