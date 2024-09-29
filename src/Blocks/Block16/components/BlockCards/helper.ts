export const changeLayoutClass = (index: number, layoutClass: string | undefined) => {
    if (!layoutClass) return;
    if (index % 2 !== 0) {
        const changedLayout = layoutClass
            ?.split('_')[0]
            ?.concat(`_${String(Number(layoutClass?.split('_')[1] ?? 0) + 1)}`);
        return changedLayout;
    }
    return layoutClass;
};