import { useCustomPluginFormStyles } from './useCustomPluginFormStyles';
import clx from 'classnames';

export const useCreatePluginFormClassNames: () => any = () => {
  const pluginClass = useCustomPluginFormStyles();
  const checkBoxRadioClassNames: Record<
    | 'radioButtonInput'
    | 'label'
    | 'errorMessage'
    | 'fieldset'
    | 'legend'
    | 'optionContainer'
    | 'checkboxInput'
    | 'input',
    string
  > = {
    legend: pluginClass.legend,
    fieldset: pluginClass.fieldset,
    label: clx(pluginClass.label, pluginClass.boxLabel),
    checkboxInput: '',
    errorMessage: '',
    optionContainer: '',
    radioButtonInput: '',
    input: '',
  };

  return {
    textField: {
      inputContainer: pluginClass.inputContainer,
      label: pluginClass.label,
      input: pluginClass.input,
    },
    textArea: {
      input: pluginClass.textArea,
      inputContainer: pluginClass.textAreaContainer,
    },
    selectInput: {
      control: pluginClass.selectInputControl,
      label: pluginClass.label,
    },
    ratingInput: {
      label: pluginClass.label,
    },
    opinionScale: {
      label: pluginClass.label,
    },
    checkBoxInput: checkBoxRadioClassNames,
    radioButtonInput: checkBoxRadioClassNames,
    imageUpload: {
      container: pluginClass.uploadImageContainer,
    },
  };
};
