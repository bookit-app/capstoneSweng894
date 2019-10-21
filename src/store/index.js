import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { provider } from '../actions'
import api from '../api'

export const GetProviderSearchResult = (filter, token) => {
    return async dispatch => {
        dispatch(provider.GetProvider(true))

        api.searchProviderByFilter(filter, token)
            .then((res) => {
                dispatch(provider.GetProviderFullFilled(res.data))
            })
            .catch((err) => {
                dispatch(provider.GetProviderReject(err))
            })
    }
}

export default createStore(reducer,applyMiddleware(thunk))