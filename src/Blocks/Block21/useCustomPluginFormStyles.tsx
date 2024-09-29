import { makeStyles } from '@mui/styles';

const resetKiamoniBorder = {
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
};
export const useCustomPluginFormStyles = makeStyles((theme: any) => ({
  inputContainer: {
    ...resetKiamoniBorder,
    padding: theme.spacing(1.5, 0.5),
    width: 'auto',
  },
  textArea: {
    ...resetKiamoniBorder,
    padding: theme.spacing(1.5, 1),
    width: 'auto',
    flex: 1,
    background: 'transparent',
  },
  textAreaContainer: {
    display: 'flex',
  },
  phoneNumberInputContainer: {
    width: '100%',
    padding: theme.spacing(0.5, 2),
  },
  phoneInputRoot: {
    border: 0,
    marginTop: 0,
  },
  phoneNumberInputDropdownButton: {
    '& > .selected-flag': {
      background: 'transparent !important',
      '&:hover': {
        background: 'transparent !important',
      },
    },
    borderRight: '1px solid'.concat(theme.kiamoniDesign.colors.neutral800),
  },
  phoneNumberInput: {
    background: 'transparent !important',
    color: theme.kiamoniDesign.colors.neutralWhite,
  },
  phoneNumberDropDown: {
    color: theme.kiamoniDesign.colors.neutralBlack,
  },
  inputLabel: {
    textTransform: 'capitalize',
  },
  selectInputControl: {
    backgroundColor: theme.design.colors.waz_white.concat(' !important'),
  },
  label: {
    fontSize: theme.typography.fontSize - 1,
    '&.phone-number-label': {
      display: 'none',
    },
  },
  input: {
    fontFamily: 'inherit',
    '&::placeholder': {
      fontSize: theme.typography.fontSize + 2,
    },
  },
  fieldset: {
    border: 0,
    borderBottom: `1px solid`,
    borderRadius: 0,
    paddingBottom: 4,
    paddingLeft: 0,
  },
  boxLabel: {
    marginLeft: theme.spacing(0.5),
  },
  legend: {
    fontSize: theme.typography.fontSize - 1,
    marginBottom: theme.spacing(1),
  },
  uploadImageContainer: {
    width: 'auto',
    background: 'inherit',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
  },
}));
