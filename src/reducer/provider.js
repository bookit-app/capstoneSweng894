import {actions} from '../actions/type'

const initialState = {
    resultLoading: true,
    alreadyFetch: false,
    errorMessage: '',
    providerSearchResult: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PROVIDER_SEARCH: {
            var a ={
                ...state,
                providerSearchResult: action.result,
            }

            // console.log('actions.SET_PROVIDER_SEARCH', a);
            
            return a
        }
        case actions.GET_PROVIDER_PENDING: {
            var b = {
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_PROVIDER_PENDING', b);
            
            return b
        }
        case actions.GET_PROVIDER_FULFILLED: {
            var c = {
                ...state,
                searchResult: action.payload, loading: action.loading, errorMessage: ''
            }

            // console.log('actions.GET_PROVIDER_FULFILLED', c);

            return c
        }
        case actions.GET_PROCIDER_REFJECTED: {
            var d = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PROCIDER_REFJECTED', d);

            return d    
        }
        case actions.ALREADY_FETCH_PROVIDER: {
            var e = {
                ...state,
                alreadyFetch: action.payload
            }
            
            // console.log('actions.ALREADY_FETCH_PROVIDER', e);

            return e
        }
        case actions.SET_PROVIDER_DETAIL: {
            var f = {
                ...state,
                providerDetails : action.payload
            }
            
            // console.log('actions.SET_PROVIDER_DETAIL', f);

            return f
        }
        case actions.GET_PROVIDER_DETAIL_PENDING: {
            var e ={
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_PROVIDER_DETAIL_PENDING', e);

            return e
        }
        case actions.GET_PROVIDER_DETAIL_FULFILLED: {
            var g = {
                ...state,
                providerDetails: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PROVIDER_DETAIL_FULFILLED', g);

            return g
        }
        case actions.GET_PROVIDER_DETAIL_REJECTED: {
            var h = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('action.GET_PROVIDER_DETAIL_REJECTED', h);

            return h
            
        }
        default:
            return state
    }
}