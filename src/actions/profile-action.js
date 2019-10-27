import { actions } from './type'

export const setProfile = (profile) => ({
    type: actions.SET_PROFILE,
    profile
})

export const GetProfile = (bool) => {
    return {
        type: actions.GET_PROFILE_PENDING,
        payload: bool
    }
}

export const GetProfileFullFilled = (data) => {
    return {
        type: actions.GET_PROFILE_FULFILLED,
        payload: data,
        loading: false,
    }
}

export const GetProfileReject = (error) => {
    return {
        type: actions.GET_PROFILE_REJECTED,
        payload: error,
        loading: false
    }
}