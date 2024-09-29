import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { useComponentsStyles } from '../styles';

export function DropdownList({
  items,
  handleDropDown,
}: {
  items: string[];
  handleDropDown: (item: string) => void;
}) {
  const { mainConfig } = useBlockSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );
  const classes = useComponentsStyles(mainConfig as CustomThemeProps);

  return (
    <>
      {items?.map((item, index: number) => (
        <li
          className={classes.dropDownList}
          key={index}
          onClick={() => {
            handleDropDown(item);
          }}
        >
          {item}
        </li>
      ))}
    </>
  );
}
