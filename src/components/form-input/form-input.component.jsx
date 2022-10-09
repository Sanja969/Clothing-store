/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {
      label && (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
      )
    }
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.instanceOf(Object).isRequired,
};

export default FormInput;
