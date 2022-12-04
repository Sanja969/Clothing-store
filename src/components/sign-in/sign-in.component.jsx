/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import { ButtonContainer } from './sign-in.styles';
import { SignUpBox } from '../sign-up/sign-up.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubnmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart);
      resetFormFields();
    } catch (error) {
      console.log('user login failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpBox>
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubnmit}>
        <FormInput required type="email" onChange={handleChange} name="email" value={email} label="Email" />
        <FormInput required type="password" onChange={handleChange} name="password" value={password} label="Password" />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} type="button" buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </ButtonContainer>

      </form>
    </SignUpBox>
  );
};

export default SignInForm;
