import {actions} from '../actions/type'

const initialState = {
    resultLoading: true,
    errorMessage: '',
    providerSearchResult: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PROVIDER_SEARCH:{
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

            console.log('actions.GET_PROVIDER_FULFILLED', c);

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
        default:
            return state
    }
}