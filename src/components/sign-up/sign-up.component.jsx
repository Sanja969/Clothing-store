/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import { SignUpBox, Title } from './sign-up.styles';
import Button from '../button/button.component';
import { SignUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
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
      dispatch(SignUpStart(email, password, displayName));
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
    <SignUpBox>
      <Title>Don&apos;t have an account?</Title>
      <span>Sign Up</span>
      <form onSubmit={handleSubnmit}>
        <FormInput required type="text" onChange={handleChange} name="displayName" value={displayName} label="Display Name" />
        <FormInput required type="email" onChange={handleChange} name="email" value={email} label="Email" />
        <FormInput required type="password" onChange={handleChange} name="password" value={password} label="Password" />
        <FormInput required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} label="Confirm Password" />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpBox>
  );
};

export default SignUpForm;
