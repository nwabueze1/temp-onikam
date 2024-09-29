import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../../types';

export const useComponentsStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    dropDownList: (props) => ({
      padding: theme.spacing(1.3),
      cursor: 'pointer',
      listStyleType: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: props?.colors?.[500],
      },
    }),
    priceFilter: (props) => ({
      borderBottom: `1px solid ${props?.colors?.[600]}`,
      '&.layout_4': {
        borderBottom: `1px solid ${props?.colors?.[400]}`,
      },
    }),
    priceFilterText: {
      fontSize: theme.kiamoniDesign.typography.h6,
      padding: theme.spacing(3, 0.5, 1),
      fontWeight: theme.kiamoniDesign.typography.fontWeightMedium,
    },
    priceLowHigh: {
      width: '80%',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px auto',
    },
    leftSideInput: (props) => ({
      margin: '20px auto',
      display: 'flex',
      boxSizing: 'border-box',
      width: '80%',
      accentColor: props?.colors?.[500],
    }),
    filterButton: (props) => ({
      width: '100px',
      height: '45px',
      display:"flex",
      margin: '20px auto',
      padding: theme.spacing(3, 0.5, 1),
      '& .secondary': {
        '&:hover': {
          background: props?.colors?.[200],
        },
      },
    }),
    searchWrapper: {
      borderBottom: '1px solid grey',
      display: 'flex',
      flexGrow: 0.2,
      margin: theme.spacing(1, 0, 3),
    },
    searchIcon: (props) => ({
      color: props?.colors?.[700],
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      fontFamily: props?.fonts?.body,
      fontWeight: theme.kiamoniDesign.typography.fontWeightBold,
      cursor: 'pointer',
      padding: theme.spacing(0.625),
    }),
    searchFi: {
      postion: 'absolute',
    },
    clearButton: (props) => ({
      position: 'absolute',
      top: '-22%',
      color: props?.colors?.[500],
      cursor: 'pointer',
      '&.layout_2,&.layout_3,&.layout_4': {
        top: '-16%',
      },
      [theme.breakpoints.down('lg')]: {
        top: '-37%',
      },
      [theme.breakpoints.down('sm')]: {
        top: '-27%',
      },
    }),
    container: {
      position: 'relative',
    },
  })
);
