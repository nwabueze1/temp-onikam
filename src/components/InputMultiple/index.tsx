import { FC } from 'react';
import { InputProps } from './type';
import { useInputStyles } from './styles';
import clx from 'classnames';
import { useField } from 'formik';

export const Input: FC<InputProps> = ({
  type,
  value,
  handleOnChange,
  placeholder,
  name = '',
  color,
  validation,
  is_formik,
  errorMessage,
  handleBlur,
  isRequired,
}) => {
  const classes = useInputStyles();

  return (
    <div className={clx(classes.inputContainer, 'input', color, validation)}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder.concat(isRequired ? ' *' : '')}
        className={clx(validation && 'validate')}
        onBlur={handleBlur}
      />
      {!is_formik && validation && (
        <div className={classes.errorText}>
          {name?.toLowerCase()} is required
        </div>
      )}
      {is_formik && errorMessage && (
        <span className={classes.errorText}>{errorMessage}</span>
      )}
    </div>
  );
};

export const FormikInput: FC<{
  name: string;
  placeholder: string;
  type?: string;
  color?: string;
}> = ({ placeholder, color, ...props }) => {
  const [fields, meta] = useField(props);

  return (
    <Input
      handleOnChange={fields.onChange}
      type={props.type ?? 'text'}
      handleBlur={fields.onBlur}
      placeholder={placeholder}
      value={meta.value}
      name={fields.name}
      is_formik
      errorMessage={meta.touched && meta.error ? meta.error : undefined}
      color={color}
      isRequired
    />
  );
};
