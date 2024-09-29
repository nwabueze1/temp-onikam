import { useDropdownListClasses } from './styles';
import { BlockProviderProps, useBlockSelector } from '../../../../components';
import { CustomThemeProps } from '../../../../types';
import { FC } from 'react';
import { DisplayDropdownListProps } from '../../types';

export const DisplayDropdownList: FC<DisplayDropdownListProps> = ({
  dropDownList,
  handleOptionSelect,
  type,
}) => {
  const { mainConfig } = useBlockSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );

  const classes = useDropdownListClasses(mainConfig as CustomThemeProps);

  return (
    <>
      {dropDownList.map((item, index: number) => (
        <li
          className={classes.dropDownList}
          key={index}
          onClick={() => handleOptionSelect(type, item.name, item.uuid)}
        >
          {item.name}
        </li>
      ))}
    </>
  );
};
