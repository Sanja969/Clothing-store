/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
