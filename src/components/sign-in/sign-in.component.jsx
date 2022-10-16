/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    email,
    password,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubnmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-box">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubnmit}>
        <FormInput required type="email" onChange={handleChange} name="email" value={email} label="Email" />
        <FormInput required type="password" onChange={handleChange} name="password" value={password} label="Password" />
        <div className="buttons-container">
          <Button type="submit" buttonType="default">Sign In</Button>
          <Button onClick={signInWithGoogle} type="button" buttonType="google">
            Google Sign In
          </Button>
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
