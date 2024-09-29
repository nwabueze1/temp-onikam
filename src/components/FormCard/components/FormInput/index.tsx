import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CustomThemeProps } from '../../../../types';
import { BlockProviderProps, FormikInput } from '../../..';
import { useFormcardStyles } from './styles';
import { FormBuilderProps, InputType } from './types';

export const FormBuilder: FC<FormBuilderProps> = ({ isDelivery = true }) => {
  const { mainConfig } = useSelector<BlockProviderProps, BlockProviderProps>(
    (state) => state
  );

  const classes = useFormcardStyles(mainConfig as CustomThemeProps);

  const getFormCtx = (name: string, placeholder: string): InputType => ({
    name,
    placeholder,
  });

  const contactInfoNames: (InputType | InputType[])[] = [
    getFormCtx('email', 'Email Address'),
    [
      getFormCtx('firstname', 'First Name'),
      getFormCtx('lastname', 'Last Name'),
    ],
    getFormCtx('phone', 'Phone'),
  ];

  const addressInfoNames: (InputType | InputType[])[] = [
    [getFormCtx('country', 'Country/Region'), getFormCtx('state', 'State')],
    getFormCtx('addressline1', 'Street Address'),
    getFormCtx('city', 'Town/City'),
    getFormCtx('postcode', 'Postal Code'),
  ];

  const renderInputLayout = (
    input: InputType | InputType[],
    index?: number
  ) => {
    if (!Array.isArray(input))
      return (
        <FormikInput
          name={input.name}
          placeholder={input?.placeholder}
          key={index}
        />
      );

    return (
      <div key={index} className={classes.gridContainer}>
        {input.map(renderInputLayout)}
      </div>
    );
  };

  const renderContactInfoInputs = () =>
    contactInfoNames?.map(renderInputLayout);

  const renderAddressInputs = () => addressInfoNames.map(renderInputLayout);

  return (
    <article className={classes.root}>
      {!isDelivery ? (
        <h6 className={classes.subtitle}>Contact Information</h6>
      ) : (
        <div className={classes.shipping}>Shipping Details</div>
      )}
      <div>
        {renderContactInfoInputs()}
        {isDelivery && renderAddressInputs()}
      </div>
    </article>
  );
};
