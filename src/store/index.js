import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { provider, auth, profile, preference } from '../actions'
import api from '../api'

/**
 * Action Creation - Handles creating the provider search results
 * @param {*} filter 
 * @param {*} token 
 */
export const GetProviderSearchResult = (filter, token) => {
    return async dispatch => {
        dispatch(provider.set_provider_search({}))
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

/**
 * Action Creation - Handles logging in the user account, profile, and retrieving the styles infor
 * @param {*} email 
 * @param {*} password 
 */
export const logIn = (email, password) => {
    return async dispatch => {   
    
    dispatch(profile.GetProfile(true))
    dispatch(profile.setProfile({}))

    dispatch(preference.GetPreference(true))
    dispatch(preference.settingPref(false))
    dispatch(preference.setPreference({}))

    dispatch(preference.GetStylePreference(true))
    dispatch(preference.setStyles({}))

    dispatch(auth.userSet(''))
    dispatch(auth.tokenSet(''))
    dispatch(auth.userAuthError(''))

    console.log('logIn', 'sending data to Firebase to create user');
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
                                    dispatch(preference.settingPref(true))
                                    dispatch(preference.GetPreferenceFullFilled(profileData.preferences))
                                }

                                var hairDresserList = []
                                var barberList = []
                                api.getConfiguration("styles", token)
                                .then((sty) => {
                                    var styles_ = sty.data 
                                    // console.log('getConfiguration');
                                    
                                    styles_.hairStyles[1].types.map(i => {
                                        
                                        var single = {}
                                        single['Id'] = hairDresserList.length
                                        single['Name'] = i
                                        single['Value'] = i
                                        single['style'] =  styles_.hairStyles[1].style
                                        single['staffclassification'] = 'Hair Dresser'  
                        
                                        hairDresserList.push(single)
                                    })
                        
                                    styles_.hairStyles[0].types.map(i => {
                                        
                                        var single = {}
                                        single['Id'] = barberList.length
                                        single['Name'] = i
                                        single['Value'] = i
                                        single['style'] =  styles_.hairStyles[0].style
                                        single['staffclassification'] = 'Barber'                      
                        
                                        barberList.push(single)
                                    })

                                    var stylePreference = {}
                                    stylePreference.styleSelected = barberList
                                    stylePreference.styleOnType = barberList[0].style
                                    stylePreference.barberList = barberList
                                    stylePreference.hairDresserList = hairDresserList

                                    // console.log('LogIn', stylePreference.styleSelected);
                                    // console.log('LogIn', stylePreference.styleOnType);
                                    // console.log('LogIn', stylePreference.barberList);
                                    // console.log('LogIn', stylePreference.hairDresserList);
                                    // dispatch(preference.setStylePreference(StylePreference))
                                    dispatch(preference.GetStylePreferenceFullFilled(stylePreference))
                                }).catch((error) =>{
                                    console.log('getConfiguration', error);
                                    dispatch(preference.GetStylePreferenceReject(error))
                                })
                            }
                        ).catch((error) => {            
                            dispatch(profile.GetProfileReject(error))
                            dispatch(preference.GetPreferenceReject(error))
                        })
                })
        })
        .catch((error) => {
            console.log('Log In',error);
            dispatch(auth.userAuthError(error))
        })
    }
}   

/**
 * Action Creation - Handles creating the user action
 * @param {*} email 
 * @param {*} password 
 */
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

                dispatch(auth.userSet(user))

                user.sendEmailVerification()
                    .then(a => {
                        console.log('Email Verification send');
                    }).catch(e => {
                        console.log('Failed to verification email'); 
                    })

                data.user.getIdToken()
                    .then((token) => {
                        dispatch(auth.tokenSet(token))
                    })
            })
            .catch((error) => {
                dispatch(auth.userAuthError(error))
            })
    }
}

/**
 * Action Creation - Handles creating the user actions, profile, and retriving the styles infor
 * @param {*} email 
 * @param {*} password 
 * @param {*} payload 
 */
export const signUpWithProfile = (email, password, payload) => {
    return async dispatch =>{   
        dispatch(profile.GetProfile(true))
        dispatch(profile.setProfile({}))
    
        dispatch(preference.GetPreference(true))
        dispatch(preference.settingPref(false))
        dispatch(preference.setPreference({}))

        dispatch(preference.GetStylePreference(true))
        dispatch(preference.setStyles({}))

        dispatch(auth.userSet(''))
        dispatch(auth.tokenSet(''))
        dispatch(auth.userAuthError(''))

        console.log('signUpWithProfile', 'sending data to Firebase to create user');
        firebase.auth()
            .createUserWithEmailAndPassword(email,password)
            .then((data) => {
                payload.uid = data.user.uid

                // console.log('signUpWithProfile', email);
                // console.log('signUpWithProfile', password);
                // console.log('signUpWithProfile', payload);

                var user = data.user
                // console.log('signUpWithProfile', data);
                

                user.getIdToken()
                    .then((token) => {
                        // console.log('signUpWithProfile', token);
                        dispatch(auth.tokenSet(token))

                        // console.log('signUpWithProfile', user.uid);
                        dispatch(auth.userSet(user.uid))

                        // console.log('signUpWithProfile', payload);
                        dispatch(profile.GetProfileFullFilled(payload))

                        user.sendEmailVerification()
                            .then(a => {
                                // console.log('signUpWithProfile', 'Email Verification');
                                console.log('Email Verification send');
                            }).catch(e => {
                                console.log('Failed to verification email'); 
                            })

                        api.insertProfile(payload, token)
                        .then((data) => {
                            
                            // console.log('signUpWithProfile', 'Insert Profile');
                            user.updateProfile({
                                    displayName: payload.firstName + ' ' + payload.lastName
                                }).then(b => {
                                    console.log('Display Name is Updated');
                                }).catch(f => {
                                    console.log('Failed to update dispaly name');
                                })

                                // console.log('getConfiguration', 'before');        
                                var hairDresserList = []
                                var barberList = []

                                api.getConfiguration("styles", token)
                                .then((sty) => {
                                    var styles_ = sty.data 
                                    // console.log('getConfiguration');
                                    
                                    styles_.hairStyles[1].types.map(i => {
                                        
                                        var single = {}
                                        single['Id'] = hairDresserList.length
                                        single['Name'] = i
                                        single['Value'] = i
                                        single['style'] =  styles_.hairStyles[1].style
                                        single['staffclassification'] = 'Hair Dresser'  
                        
                                        hairDresserList.push(single)
                                    })
                        
                                    styles_.hairStyles[0].types.map(i => {
                                        
                                        var single = {}
                                        single['Id'] = barberList.length
                                        single['Name'] = i
                                        single['Value'] = i
                                        single['style'] =  styles_.hairStyles[0].style
                                        single['staffclassification'] = 'Barber'              
                        
                                        barberList.push(single)
                                    })

                                    var stylePreference = {}
                                    stylePreference.styleSelected = barberList
                                    stylePreference.styleOnType = barberList[0].style
                                    stylePreference.barberList = barberList
                                    stylePreference.hairDresserList = hairDresserList

                                    // console.log('signUpWithProfile', stylePreference.styleSelected);
                                    // console.log('signUpWithProfile', stylePreference.styleOnType);
                                    // console.log('signUpWithProfile', stylePreference.barberList);
                                    // console.log('signUpWithProfile', stylePreference.hairDresserList);
                                    // dispatch(preference.setStylePreference(StylePreference))'
                                    dispatch(preference.GetStylePreferenceFullFilled(stylePreference))
                                }).catch((error) =>{
                                    console.log('getConfiguration', error);
                                    dispatch(preference.GetStylePreferenceReject(error))
                                })
                        })
                        .catch((error) => {
                            dispatch(auth.userAuthError(error))  
                            dispatch(profile.GetProfileReject(error))           
                        })
                    })
            })
            .catch((error) => {
                dispatch(auth.userAuthError(error))
                dispatch(profile.GetProfileReject(error))
            })        
    }
}

/**
 * Action Creation - Handles emptying the store of all information on sign-out
 */
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