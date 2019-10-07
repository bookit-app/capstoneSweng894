import { auth, auth_ } from '../config/firebaseConfig'
export const SignUpFacebook = (props) => {
    const credential = auth_.FacebookAuthProvider.credential(props.accessToken);

    auth.signInWithCredential(credential)
        .then((data) => props.onSuccess(data.user)) //this.loginUserSuccess(data.user))
        .catch((error) => props.onFailure(error)) //this.loginSingUpFail(error));
}

export const SignOutFacebook = () => {
    auth.signOut()
}