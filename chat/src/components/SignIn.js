import { firebaseData, provider } from '../dataBase';

import { useAuthState } from 'react-firebase-hooks/auth';
export default function SignIn() {
  const auth = firebaseData.auth();
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign In with google
      </button>
    </div>
  );
}
