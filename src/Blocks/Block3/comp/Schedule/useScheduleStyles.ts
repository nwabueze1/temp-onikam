import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { CustomThemeProps } from '../../../../types';
import { getResponsiveFontSize } from '../../../../helper/getResponsiveFontSize';

export const useScheduleStyles = makeStyles<Theme, CustomThemeProps>(
  (theme) => {
    const commonStyles = (props: CustomThemeProps) => ({
      fontSize: getResponsiveFontSize(
        theme.typography.fontSize,
        theme.typography.fontSize + 2
      ),
      color: props?.colors?.[100],
      fontFamily: props?.fonts?.body,
    });

    return {
      title: (props) => ({
        ...commonStyles(props),
        fontWeight: theme.typography.fontWeightBold,
      }),
      subtitle: commonStyles,
      container: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
      },
      image: {
        display: 'block',
        width: 20,
        height: 20,
      },
      baseContainer: {
        display: 'grid',
        gap: theme.spacing(2.5),
      },
    };
  }
);
