import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { RadioButtonComponent } from '../RadioButton';
import { useAccordionStyles } from './styles';
import { CustomThemeProps } from '../../types';
import clx from 'classnames';
import { formData } from './data';
import { BlockProviderProps, useBlockSelector } from '../BlockProvider';
import { FormCardRef, FormCardProps } from './types';
import { FormBuilder } from './components/FormInput';
import { useSchema } from '../../Blocks/Block23/components/Forms/schema';
import { Form, Formik } from 'formik';

export const FormCard = forwardRef<FormCardRef, FormCardProps>(
  ({ deliveryOption, isPayment, pickedOption, handleSubmit }, ref) => {
    const [deliveryType, setDeliveryType] = useState('pickup');
    const { mainConfig } = useBlockSelector<
      BlockProviderProps,
      BlockProviderProps
    >((state) => state);
    const classes = useAccordionStyles(mainConfig as CustomThemeProps);
    const { initialState, validationSchema } = useSchema();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleRadioChange = (
      event: ChangeEvent<HTMLInputElement> | string
    ) => {
      if (typeof event === 'string') {
        setDeliveryType(event);
        deliveryOption(event);
      } else {
        setDeliveryType(event?.target?.value);
        deliveryOption(event?.target?.value);
      }
    };

    useImperativeHandle(ref, () => ({
      submit() {
        buttonRef?.current?.click();
      },
    }));

    return (
      <div className={classes.root}>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              {formData?.map((item, index: number) => (
                <div
                  key={index}
                  className={clx(
                    classes.container,
                    isPayment && pickedOption !== item?.name && [item?.name]
                  )}
                >
                  <div
                    className={clx(classes.accordion)}
                    onClick={() => {
                      handleRadioChange(item?.name);
                      props.setFieldValue('delivery option', item.name);
                    }}
                  >
                    <div className={classes.accordionText}>
                      <p className={classes.accordionTextHeader}>
                        {item?.header}
                      </p>
                      <p className={classes.accordionTextSubheader}>
                        {item?.subheader}
                      </p>
                    </div>
                    <RadioButtonComponent
                      name={item?.name}
                      value={item?.name}
                      checked={deliveryType === item?.name}
                      onChange={handleRadioChange}
                      isColor={true}
                    />
                  </div>
                  {deliveryType === item?.name && (
                    <div className={classes.formContainer}>
                      <FormBuilder isDelivery={item?.name === 'delivery'} />
                    </div>
                  )}
                </div>
              ))}
              <button
                ref={buttonRef}
                type="submit"
                className={classes.submitBtn}
              />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
);
