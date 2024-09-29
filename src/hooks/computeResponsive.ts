export const computeResponsive = (parentWidth: number) => {
    const breakpoints = {
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    };

    const sm = parentWidth < breakpoints.sm;
    const md = parentWidth >= breakpoints.sm && parentWidth < breakpoints.md;
    const lg = parentWidth >= breakpoints.md && parentWidth < breakpoints.lg;
    const xl = parentWidth >= breakpoints.lg;

    return {
        sm,
        md,
        lg,
        xl,
    };
};