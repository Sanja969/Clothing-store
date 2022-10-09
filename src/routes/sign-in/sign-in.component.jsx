/* eslint-disable no-unused-vars */
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser} type="button">
        Sign In with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
