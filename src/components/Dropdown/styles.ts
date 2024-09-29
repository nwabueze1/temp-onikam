import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

export const useDropDownStyles = makeStyles<Theme, CustomThemeProps>(() => ({
  dropdownContainer: {
    position: 'relative',
    display: 'inline-block',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  dropdownButton: {
    border: 'none',
    borderRadius: '4px',
    justifyContent: 'flex-end',
    '&.right': {
      justifyContent: 'flex-end',
    },
    '&.center': {
      justifyContent: 'center',
    },
    cursor: 'pointer',
    display: 'flex',
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  dropdownOptions: (props) => ({
    position: 'absolute',
    top: '100%',
    left: -11,
    '&.right': {
      left: 'unset',
      right: -11,
    },
    width: '180px',
    marginTop: '5px',
    padding: 0,
    listStyleType: 'none',
    background: props?.colors?.[200],
  }),
}));
