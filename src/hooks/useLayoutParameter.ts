import { useMediaQuery, useTheme } from '@mui/material';

export const useLayoutParameter = (
  layouts: { name: string; isSelected: boolean }[] | undefined
) => {
  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : undefined;
  const queryParam = params ? params.get('layout') : undefined;
  const selectedLayout =
    (!queryParam
      ? layouts?.find((c) => c.isSelected)?.name
      : layouts?.find((c) => c.name === queryParam)?.name || undefined) ??
    'layout-1';
  const layoutClass = selectedLayout?.replace(/-/g, '_') ?? 'layout_1';
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down(600));
  const xmd = useMediaQuery(theme.breakpoints.down(700));
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return { path, selectedLayout, layoutClass, theme, lg, sm, md, xmd };
};
