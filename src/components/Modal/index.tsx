import { ModalProps } from './types';
import { FC } from 'react';
import { useModalStyles } from './styles';
import { BlockProviderProps, useBlockSelector } from '..';
import { CustomThemeProps } from '../../types';
import { LiaTimesSolid } from 'react-icons/lia';
import clx from 'classnames';
import { ClickAwayListener } from '@mui/base';

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  position,
}) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useModalStyles(mainConfig as CustomThemeProps);
  const closeModal = () => {
    onClose();
  };

  return isOpen ? (
    <>
      <div className={clx(classes.modal, position)}>
        <ClickAwayListener onClickAway={closeModal}>
          <div className={classes.modalContent}>
            {children}
            <LiaTimesSolid
              onClick={closeModal}
              className={classes.closeButton}
            />
          </div>
        </ClickAwayListener>
      </div>
      <div className={classes.modalOverlay} />
    </>
  ) : null;
};
