import {signInWithPopup} from 'firebase/auth';
import 'firebase/app';
import firebase from 'firebase/app';

function SignIn(props) {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )
  
  }

  export default SignIn;