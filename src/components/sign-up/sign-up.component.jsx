/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubnmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Please do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/eamil-already-in-use') {
        alert('Cannot create user,  email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-box">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up</span>
      <form onSubmit={handleSubnmit}>
        <FormInput required type="text" onChange={handleChange} name="displayName" value={displayName} label="Display Name" />
        <FormInput required type="email" onChange={handleChange} name="email" value={email} label="Email" />
        <FormInput required type="password" onChange={handleChange} name="password" value={password} label="Password" />
        <FormInput required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} label="Confirm Password" />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
