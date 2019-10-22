import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
import { provider } from '../actions'
import { actions } from '../actions/type'
import api from '../api'

export const GetProviderSearchResult = (filter, token) => {
    return async dispatch => {
        console.log('GetProviderSearchResult', 'Start');
        
        dispatch(provider.GetProvider(true))
        console.log('GetProviderSearchResult GetProvider', 'True');

        api.searchProviderByFilter(filter, token)
            .then((res) => {
                console.log('GetProviderSearchResult searchProviderByFilter', 'successfully');
                dispatch(provider.GetProviderFullFilled(res.data))
            })
            .catch((err) => {
                dispatch(provider.GetProviderReject(err))
                console.log('GetProviderSearchResult searchProviderByFilter', 'Reject');
            })
    }
}

const apiMiddleWare = store => next => action => {
    console.log("Middleware Trigger", action)
    if(action.type !== actions.GET_PROVIDER_PENDING ||
        action.type !== actions.GET_PROVIDER_FULFILLED ||
        action.type !== actions.GET_PROCIDER_REFJECTED){
        return next(action)
    }
    console.log('GetProviderSearchResult', 'Start');
    
    dispatch(provider.GetProvider(true))
    console.log('GetProviderSearchResult GetProvider', 'True');

    api.searchProviderByFilter(filter, token)
    .then((res) => {
        console.log('GetProviderSearchResult searchProviderByFilter', 'successfully');
        dispatch(provider.GetProviderFullFilled(res.data))
    })
    .catch((err) => {
        dispatch(provider.GetProviderReject(err))
        console.log('GetProviderSearchResult searchProviderByFilter', 'Reject');
    })

    return function(next){

        return function(action){

        }
    }
}

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
  
}

export default createStore(reducer,applyMiddleware(thunk))