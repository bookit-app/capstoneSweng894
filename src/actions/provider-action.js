import { actions } from './type'

export const SetProviderSearch = (result) =>({
    type: actions.SET_PROVIDER_SEARCH,
    result
})

export const alreadyFetch = (bool) => ({
    type: actions.ALREADY_FETCH_PROVIDER,
    payload: bool
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

export const SetProviderDetails = (data) => ({
    type: actions.SET_PROVIDER_DETAIL,
    payload: data
})

export const GetProviderDetails = (bool) => ({
    type: actions.GET_PROVIDER_DETAIL_PENDING,
    payload: bool
})

export const GetProviderDetailFullFilled = (data) => ({
    type: actions.GET_PROVIDER_DETAIL_FULFILLED,
    payload: data,
    loading: false
})

export const GetProviderDetailsReject = (error) => ({
    type: actions.GET_PROVIDER_DETAIL_REJECTED,
    payload: error,
    loading: false
})