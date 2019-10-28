import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { provider, auth, profile, preference } from '../actions'
import api from '../api'

export const GetProviderSearchResult = (filter, token) => {
    return async dispatch => {
        dispatch(provider.GetProvider(true))

        api.searchProviderByFilter(filter, token)
            .then((res) => {
                dispatch(provider.GetProviderFullFilled(res.data))
            })
            .catch((err) => {
                dispatch(provider.GetProviderReject(err))
            })
    }
}

export const logIn = (email, password) => {
    return async dispatch => {   
    
    dispatch(profile.GetProfile(true))
    dispatch(profile.setProfile({}))

    dispatch(preference.GetPreference(true))
    dispatch(preference.settingPref(true))
    dispatch(preference.setPreference({}))


    dispatch(auth.userSet(''))
    dispatch(auth.tokenSet(''))
    dispatch(auth.userAuthError(''))

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            var userId = data.user.uid

            // console.log('logIn user id', userId);
            
            dispatch(auth.userSet(userId))

            data.user.getIdToken()
                .then((token) => {

                    // console.log('logIn token', userId);
                    dispatch(auth.tokenSet(token))
            
                    api.getProfileById(userId, token)
                        .then(userData => {
                                
                                var profileData = userData.data
                                // console.log('logIn profile', profileData);
                                dispatch(profile.GetProfileFullFilled(profileData))

                                if(profileData.preferences){                 
                                    // console.log('logIn preference', profileData.preferences);                   
                                    // dispatch(preference.setPreference(profileData.preferences))
                                    dispatch(preference.GetPreferenceFullFilled(profileData.preferences))
                                    dispatch(preference.settingPref(true))
                                }
                            }
                        ).catch((error) => {            
                            dispatch(profile.GetProfileReject(error))
                            dispatch(preference.GetPreferenceReject(error))
                        })
                })
        })
        .catch((error) => {
            // console.log(error);
            dispatch(auth.userAuthError(error))
        })
    }
}   

export const signUp = (email, password) => {
    return async dispatch => {
        dispatch(profile.setProfile({}))

        dispatch(preference.setPreference({}))
        dispatch(preference.settingPref(false))

        dispatch(auth.userSet(''))
        dispatch(auth.tokenSet(''))
        dispatch(auth.userAuthError(''))
        
        firebase.auth()
            .createUserWithEmailAndPassword(email,password)
            .then((data) => {
                var user = data.user

                // console.log('signUp creation', user);

                dispatch(auth.userSet(user))

                user.sendEmailVerification()
                    .then(a => {
                        console.log('Email Verification send');
                    }).catch(e => {
                        console.log('Failed to verification email'); 
                    })

                data.user.getIdToken()
                    .then((token) => {
                        // console.log('signUp set token', token);
                        
                        dispatch(auth.tokenSet(token))
                    })
            })
            .catch((error) => {
                dispatch(auth.userAuthError(error))
            })
    }
}

export const signOut = () =>{
    return async dispatch => {
        dispatch(profile.setProfile({}))
        dispatch(preference.setPreference({}))
        dispatch(preference.settingPref(false))
        dispatch(auth.userSet(''))
        dispatch(auth.tokenSet(''))
        dispatch(auth.userAuthError(''))
    }
}

export default createStore(reducer,applyMiddleware(thunk))