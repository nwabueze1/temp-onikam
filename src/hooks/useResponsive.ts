import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('sm'));
  const lg = useMediaQuery(theme.breakpoints.up('md'));
  const xl = useMediaQuery(theme.breakpoints.up('lg'));
  const sm = useMediaQuery(theme.breakpoints.up('xs'));
  const xl2 = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    md,
    lg,
    xl,
    sm,
    xl2,
  };
};
