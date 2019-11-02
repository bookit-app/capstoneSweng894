import { actions} from './type'

export const setPreference = (preference) => ({
    type: actions.SET_PREFERENCE,
    preference
})

export const settingPref = (pref) => ({
    type: actions.SET_PREF,
    pref
})

export const setStyles = (styles) => ({
    type: actions.SET_STYLES,
    payload: styles
})

export const GetStylePreference = (bool) => ({
    type: actions.GET_STYLES_PENDING,
    styleLoading: bool
})

export const GetStylePreferenceFullFilled = (data) => ({
    type: actions.GET_STYLES_FULFILLED,
    payload: data,
    styleLoading: false
})

export const GetStylePreferenceReject = (error) => ({
    type: actions.GET_STYLES_REJECTED,
    payload: error,
    styleLoading: false
})

export const GetPreference = (bool) => ({
    type: actions.GET_PREFERENCE_PENDING,
    payload: bool
})

export const GetPreferenceFullFilled = (data) => ({
    type: actions.GET_PREFERENCE_FULFILLED,
    payload: data,
    loading: false
})

export const GetPreferenceReject = (error) => ({
    type: actions.GET_PREFERENCE_REJECTED,
    payload: error,
    loading: false
})