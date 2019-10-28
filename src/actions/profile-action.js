import { actions } from './type'

export const setProfile = (profile) => ({
    type: actions.SET_PROFILE,
    profile
})

export const GetProfile = (bool) => ({
    type: actions.GET_PROFILE_PENDING,
    payload: bool
})

export const GetProfileFullFilled = (data) => ({
    type: actions.GET_PROFILE_FULFILLED,
    payload: data,
    loading: false,
})

export const GetProfileReject = (error) => ({
    type: actions.GET_PROFILE_REJECTED,
    payload: error,
    loading: false
})