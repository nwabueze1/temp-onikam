import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../../../types';
import { getResponsiveFontSize } from '../../../../helper/getResponsiveFontSize';

export const useLinkStyles = makeStyles<Theme, CustomThemeProps>((theme) => {
  const commonProps = (props: CustomThemeProps) => ({
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[100],
    margin: 0,
  });

  return {
    link: (props) => ({
      ...commonProps(props),
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: getResponsiveFontSize(
        theme.typography.fontSize,
        theme.typography.fontSize + 2
      ),
      '&:hover': {
        textDecoration: 'underline',
        '&.no-link': {
          textDecoration: 'none',
        },
      },
    }),
    linkHeader: (props) => ({
      ...commonProps(props),
      fontSize: getResponsiveFontSize(
        theme.typography.fontSize + 6,
        theme.typography.fontSize + 10
      ),
      fontWeight: theme.typography.fontWeightMedium,
    }),
    navContainer: {
      display: 'grid',
      gap: theme.spacing(3),
      [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(5),
      },
    },
    linkContainer: {
      display: 'grid',
      gap: theme.spacing(2.5),
    },
  };
});
