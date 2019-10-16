import { actions } from './type'

export const settingPref = (pref) => ({
    type: actions.SETTING_PREF,
    pref
})