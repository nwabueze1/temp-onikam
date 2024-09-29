import { ReactNode, useEffect, useState } from 'react';
import { useDropDownStyles } from './styles';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BlockProviderProps, useBlockSelector } from '../../components';
import { CustomThemeProps } from '../../types';
import clx from 'classnames';

export const Dropdown = ({
  children,
  selectedOption,
  position,
}: {
  children: ReactNode;
  selectedOption: { name: string; uuid: string };
  position?: 'right' | 'center';
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useDropDownStyles(mainConfig as CustomThemeProps);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [selectedOption]);

  return (
    <div className={classes.dropdownContainer}>
      <div
        className={clx(classes.dropdownButton, position)}
        onClick={toggleDropdown}
      >
        {selectedOption?.name || 'Sortby'}
        <RiArrowDropDownLine />
      </div>
      {isOpen && (
        <ul className={clx(classes.dropdownOptions, position)}>{children}</ul>
      )}
    </div>
  );
};
