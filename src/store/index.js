import { createStore, applyMiddleware } from 'redux'
import firebase, { app } from 'firebase'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { provider, auth, profile, preference, appointment } from '../actions'
import api from '../api'
import utilites from '../utilites'
import { UpcomingAppointments, PreviousAppointments } from '../constant'
import date from 'date-and-time'

/**
 * Action Creation - Handles creating the provider search results
 * @param {*} filter 
 * @param {*} token 
 */
export const GetProviderSearchResult = (filter, token) => {
    return async dispatch => {
        dispatch(provider.SetProviderSearch({}))
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
 * Action Creation - Handle creating retrieving the provider details
 * @param {*} id 
 * @param {*} token 
 */
export const GetProviderDetails = (id, token) => {
    return async dispatch => {
        dispatch(provider.SetProviderDetails({}))
        dispatch(provider.GetProviderDetails(true))

        api.getProviderDetails(id, token)
            .then((prov) => {
                dispatch(provider.GetProviderDetailFullFilled(prov.data))
            })
            .catch((err) =>{
                dispatch(provider.GetProviderDetailsReject(err))
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

                    console.log('login getting appointments');
                    
                    dispatch(getAppointment('','','P',token))
                    dispatch(getAppointment('','','U',token))
        
                    api.getProfileById(userId, token)
                        .then(userData => {
                                var profileData = userData.data
                                // console.log('logIn profile', profileData);
                                dispatch(profile.GetProfileFullFilled(profileData))

                                if(!utilites.isEmpty(profileData.preferences)){      
                                    dispatch(preference.settingPref(true))
                                    dispatch(preference.GetPreferenceFullFilled(profileData.preferences))
                                }

                                var hairDresserList = []
                                var barberList = []

                                api.getConfiguration("styles", token)
                                .then((sty) => {
                                    var styles_ = sty.data                                     
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

                                    dispatch(preference.GetStylePreferenceFullFilled(stylePreference))
                                }).catch((error) =>{
                                    console.log('getConfiguration', error);
                                    dispatch(preference.GetStylePreferenceReject(error))
                                })
                            }
                        ).catch((error) => {      
                            dispatch(auth.userAuthError(error))      
                            dispatch(profile.GetProfileReject(error))
                            dispatch(preference.GetPreferenceReject(error))
                        })
                })
                .catch((error) => {         
                    dispatch(auth.userAuthError(error))   
                })
        })
        .catch((error) => {
            console.log('Log In',error);
            dispatch(auth.userAuthError(error))
            dispatch(profile.GetProfileReject(error))
            dispatch(preference.GetPreferenceReject(error))
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
                    .catch((error) => {
                        dispatch(auth.userAuthError(error))           
                    })
            })
            .catch((error) => {
                dispatch(auth.userAuthError(error))
                dispatch(profile.GetProfileReject(error))
                dispatch(profile.GetProfileReject(error)) 
                dispatch(preference.GetStylePreferenceReject(error))
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

export const getAppointment = (startDt, endDt, type, token) => {
    return async dispatch => {
        const now = new Date()

        var error ={
            message: 'No appointments found'
        }

        if(type == 'P'){
            // console.log('getAppointment', 'Previous');
            dispatch(appointment.SetPreviousAppointment({}))
            dispatch(appointment.GetPreviousAppointment(true))

            try {
                const startDate = date.addMonths(now, -2)
                const endDate = now
        
                var dateRange = {
                    start: startDate,
                    end: endDate
                }
        
                var filter = utilites.filterGenerate(dateRange)
                var previousAppointment = await api.searchAppointmentByFilter(filter, token)

                if(!utilites.isEmpty(previousAppointment)){
                    // console.log('getAppointment', 'previous fullfilled');
                    dispatch(appointment.GetPreviousAppointmentFullFilled(previousAppointment))
                } else {
                    // console.log('getAppointment', 'previous reject');
                    dispatch(appointment.GetPreviousAppointmentReject(error))
                }
            } catch (error) {
                // console.log('getAppointment', 'set previous');
                dispatch(appointment.SetPreviousAppointment(PreviousAppointments))
            }
        } else {
            // console.log('getAppointment', 'Upcoming');
            dispatch(appointment.SetUpcomingAppointment({}))
            dispatch(appointment.GetUpcomingAppointment(true))

            try {
                const startDate = now
                const endDate = date.addMonths(now, 2)
        
                var dateRange = {
                    start: startDate,
                    end: endDate
                }
        
                var filter = utilites.filterGenerate(dateRange)
                var upcomingAppointment = await api.searchAppointmentByFilter(filter, token)

                if(!utilites.isEmpty(previousAppointment)){
                    // console.log('getAppointment', 'upcoming fullfilled');
                    dispatch(appointment.GetUpcomingAppointmentFullFilled(upcomingAppointment))
                } else {
                    // console.log('getAppointment', 'upcoming reject');
                    dispatch(appointment.GetUpcomingAppointmentReject(error))
                }
            } catch (error) {
                // console.log('getAppointment', 'set upcoming');
                dispatch(appointment.SetUpcomingAppointment(UpcomingAppointments))
            }
        }
    }
}

export default createStore(reducer,applyMiddleware(thunk))