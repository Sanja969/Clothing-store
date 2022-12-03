/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {
      label && (
      <FormInputLabel shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
      )
    }
  </Group>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.instanceOf(Object).isRequired,
};

export default FormInput;
