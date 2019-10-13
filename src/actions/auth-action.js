import firebase from 'firebase'
// import { auth } from '../repository/auth'

export const userSet = userId => ({
    type: 'USER_SET',
    payload: userId
})

export const userAuthError = error => ({
    type: 'AUTH_ERROR',
    payload: error
})

// export const userToken = () => ({
//     type: 'TOKEN',
//     payload: dispatch(auth.getCurrentToken())
// })

export const logIn = async (email, password) =>  dispatch => {
    console.log('Login');
    
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data);
            
            dispatch(userSet(data.user))
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
