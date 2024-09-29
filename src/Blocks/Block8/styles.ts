import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';
import { getResponsiveFontSize } from '../../helper/getResponsiveFontSize';

export const KiamoniBLock8Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: '100%',
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      '& h1': {
        margin: 0,
        fontSize: theme.kiamoniDesign.typography.h1,
        fontFamily: props?.fonts?.heading,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.h2,
        },
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.h5,
        },
      },
      '& p': {
        lineHeight: '24px',
        lineSpace: '0.2px',
        fontFamily: 'inherit',
        fontSize: theme.kiamoniDesign.typography.fontSize,
        [theme.breakpoints.down('md')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize - 2,
          lineHeight: '18px',
        },
        userSelect: 'none',
      },
      '& h6': {
        lineHeight: '30px',
        lineSpace: '0.2px',
        fontFamily: 'inherit',
        fontSize: theme.kiamoniDesign.typography.h5,
        fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.kiamoniDesign.typography.fontSize,
          lineHeight: '24px',
        },
        [theme.breakpoints.down('md')]: {
          lineHeight: '18px',
        },
        userSelect: 'none',
      },
    }),
    block8ActiveElement: {
      border: '1px dashed white',
    },
    headerContainer: {
      justifyContent: 'center',
      display: 'flex',
      marginBottom: theme.spacing(6),
      [theme.breakpoints.up('lg')]: {
        '&.layout_5': {
          justifyContent: 'space-between',
        },
      },
    },
    container: {
      width: '85%',
      margin: 'auto',
      padding: '4% 0',
      maxWidth: theme.kiamoniStyles.maxWidth,
    },
    block: {
      display: 'grid',
      [theme.breakpoints.up('md')]: {
        columnGap: theme.spacing(5),
        rowGap: theme.spacing(3.8),
        '&.layout-2': {
          gridTemplateColumns: 'repeat(2, 1fr)',
          '& > .blogCard:first-of-type': {
            gridColumn: '1/3',
            marginBottom: 0,
          },
          '& > .blogCard:nth-child(n+4)': {
            display: 'none',
          },
        },
        '&.layout-3': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
      },
      [theme.breakpoints.up('lg')]: {
        '&.layout-2, &.layout-3': {
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: theme.spacing(1),
        },
        '&.layout-3': {
          columnGap: theme.spacing(5),
          rowGap: 0,
        },
      },
    },
    blockHeading: {
      fontSize: getResponsiveFontSize(
        theme.typography.fontSize + 10,
        theme.typography.fontSize + 50
      ),
      fontFamily: (props) => props?.fonts?.heading,
      position: 'relative',
      marginBottom: 45,
      '&::after': {
        content: '""',
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: -20,
        background: 'red',
        height: 30,
      },
    },
    buttonArrow: (props) => ({
      color: props?.colors?.[400],
      paddingLeft: '10px',
      display: 'none',
    }),
    buttonContainer: (props) => ({
      width: '150px',
      height: '50px',
      margin: 'auto',
      gridColumn: '1/5',
      '&.layout_2': {
        gridColumn: '1/-1',
        [theme.breakpoints.between('sm', 'lg')]: {
          gridColumn: '1 / 3',
        },
      },
      '&.layout_3': {
        gridColumn: '1/5',
        [theme.breakpoints.down(1300)]: {
          gridColumn: '1 / 3',
        },
        [theme.breakpoints.down('sm')]: {
          gridColumn: '1 / 5',
        },
      },
      paddingTop: theme.spacing(3.5),
      '&:hover': {
        '& svg': {
          color: props?.colors?.[100],
        },
      },
    }),
    arrowContainer: {
      alignSelf: 'center',
    },
    carouselWrapper: {
      gridColumn: '1/5',
    },
  })
);
