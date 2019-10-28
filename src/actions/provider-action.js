import { actions } from './type'

export const set_provider_search = (result) =>({
    type: actions.SET_PROVIDER_SEARCH,
    result
})

export const GetProvider = (bool) => ({
    type: actions.GET_PROVIDER_PENDING,
    payload: bool
})

export const GetProviderFullFilled = (data) => ({
    type: actions.GET_PROVIDER_FULFILLED,
    payload: data,
    loading: false,
})

export const GetProviderReject = (error) => ({
    type: actions.GET_PROCIDER_REFJECTED,
    payload: error,
    loading: false
})
