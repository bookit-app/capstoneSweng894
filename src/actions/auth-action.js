import firebase from 'firebase'
import { actions } from './type'

export const userSet = userId => ({
    type: actions.USER_SET,
    userId 
})

export const tokenSet = token => ({
    type: actions.TOKEN,
    token
})

export const userAuthError = error => ({
    type: actions.AUTH_ERROR,
    error
})

export const logIn = async (email, password) =>  dispatch => {
    console.log('Login');
    
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data);
            
            dispatch(userSet(data.user.uid))
        })
        .catch((error) => {
            console.log(error);
            
            dispatch(userAuthError('Authentication Failed'))
        })
}

export const signUp = (email, password) => {
    firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then((data) => {
            dispatch(userSet(data.user))
        })
        .catch((error) => {
            dispatch(userAuthError(error))
        })
}

