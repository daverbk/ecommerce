import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils';

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const userAuth = await signInWithGooglePopup();
        await createUserDocumentFromAuth(userAuth.user)
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }>
                Sign in With Google Popup
            </button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;
