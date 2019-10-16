import { actions } from './type'
import { getProfile } from '../utilites'

export const getProfileData = () => ({
    type: actions.GET_PROFILE,
    profile: getProfile()
})
