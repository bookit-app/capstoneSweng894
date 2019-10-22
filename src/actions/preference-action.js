import {
    actions
} from './type'

export const setPreference = (preference) => ({
    type: actions.SET_PREFERENCE,
    preference
})

export const settingPref = (pref) => ({
    type: actions.SET_PREF,
    pref
})

export const GetPreference = (bool) => {
    return {
        type: actions.GET_PREFERENCE_PENDING,
        payload: bool
    }
}

export const GetPreferenceFullFilled = (data) => {
    return {
        type: actions.GET_PREFERENCE_FULFILLED,
        payload: data,
        loading: false
    }
}

export const GetPreferenceReject = (error) => {
    return {
        type: actions.GET_PREFERENCE_REJECTED,
        payload: error,
        loading: false
    }
}