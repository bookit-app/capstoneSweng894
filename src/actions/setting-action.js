import { actions } from './type'

export const settingPref = (pref) => ({
    type: actions.SET_PREF,
    pref
})