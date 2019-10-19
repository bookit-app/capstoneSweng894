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