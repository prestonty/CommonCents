import {signInWithGoogle} from '../config/firebase';

function SignIn() {
    return (
        <>
          <h1>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
          </h1>
        </>
      )
}

export default SignIn;
