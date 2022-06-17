import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <div>
        <h1>Google Sign In Component</h1>
        <button onClick={logGoogleUser}>Google Pop-up Sign In</button>
      </div>
      <SignUpForm />
    </div>
  )
}

export default SignIn;

